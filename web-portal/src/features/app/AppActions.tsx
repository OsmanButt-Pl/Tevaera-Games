import { gqlClient } from '../../components/AppProvider';
import { Person } from '../../gql-types.generated';
import { queryPersonByEmail, watchPersonByEmail } from '../../gql/QueryPersonByEmail';
import { AppDispatch } from '../../store';
import {
  incrementRequestsInFlight,
  fetchViewerUserByEmailSuccess,
  fetchUserExists,
  decrementRequestsInFlight,
  fetchError,
} from './AppSlice';

export const watchViewerUserByEmail =
  (email: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(incrementRequestsInFlight());
    let changeCount = 0;
    let sub: ZenObservable.Subscription;
    let timeout: NodeJS.Timeout;
    try {
      await watchPersonByEmail(gqlClient, email).then(obsQuery => {
        try {
          // Timeout after 6 seconds.
          timeout = setTimeout(() => {
            obsQuery.stopPolling();
            sub.unsubscribe();
            const { data, loading } = obsQuery.getCurrentResult();
            if (changeCount >= 1 && data && data.person && !loading) {
              obsQuery.stopPolling();
              sub.unsubscribe();
              dispatch(fetchViewerUserByEmailSuccess(data.person as Person));
              dispatch(decrementRequestsInFlight());
            }
          }, 6000);
          // Subscribe only executed when the cache value updates. Needs to update initial change.
          sub = obsQuery.subscribe(({ data, loading }) => {
            if (changeCount >= 1 && data && data.person && !loading) {
              clearTimeout(timeout);
              obsQuery.stopPolling();
              sub.unsubscribe();
              dispatch(fetchViewerUserByEmailSuccess(data.person as Person));
              dispatch(decrementRequestsInFlight());
            }
            changeCount += 1;
          });
        } catch (e) {
          // Force unsub.
          if (sub) {
            sub.unsubscribe();
          }
          if (timeout) {
            clearTimeout(timeout);
          }
          obsQuery.stopPolling();
          dispatch(fetchError(e as Error));
          dispatch(decrementRequestsInFlight());
        }
      });
    } catch (e) {
      dispatch(fetchError(e as Error));
      dispatch(decrementRequestsInFlight());
    }
  };

export const fetchViewerUserByEmail =
  (email: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(incrementRequestsInFlight());
    try {
      const viewerUser = await queryPersonByEmail(gqlClient, email);
      if (viewerUser) {
        dispatch(fetchViewerUserByEmailSuccess(viewerUser as Person));
        dispatch(fetchUserExists(true));
      } else {
        dispatch(fetchUserExists(false));
      }

      dispatch(decrementRequestsInFlight());
    } catch (e) {
      if ((e as Error).message.indexOf('Person not found') !== -1) {
        dispatch(fetchUserExists(false));
      }
      dispatch(fetchError(e as Error));
      dispatch(decrementRequestsInFlight());
    }
  };
