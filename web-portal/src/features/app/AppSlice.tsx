import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from '../../gql-types.generated';
import { RootState } from '../../store';

interface SliceState {
  error?: Error;
  requestsInFlight: number;
  userExists?: boolean;
  userNoEmail?: boolean;
  viewerUser?: Person;
  menuVisible: boolean;
}

const initialState: SliceState = {
  error: undefined,
  requestsInFlight: 0,
  userExists: undefined,
  viewerUser: undefined,
  menuVisible: true,
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fetchError: (state, action: PayloadAction<Error>) => {
      // eslint-disable-next-line no-param-reassign
      state.error = action.payload;
    },
    fetchViewerUserByEmailSuccess: (state, action: PayloadAction<Person>) => {
      // eslint-disable-next-line no-param-reassign
      state.viewerUser = action.payload;
    },
    fetchUserExists: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.userExists = action.payload;
    },
    incrementRequestsInFlight: state => {
      // eslint-disable-next-line no-param-reassign
      state.requestsInFlight += 1;
    },
    decrementRequestsInFlight: state => {
      // eslint-disable-next-line no-param-reassign
      if (state.requestsInFlight > 0) state.requestsInFlight -= 1;
    },
    fetchUserNoEmail: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.userNoEmail = action.payload;
    },
    fetchMenuVisible: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.menuVisible = action.payload;
    },
  },
});

export const selectViewerUser = (state: RootState): Person | undefined => state.app.viewerUser;
export const selectUserExists = (state: RootState): boolean | undefined => state.app.userExists;
export const selectRequestsInFlight = (state: RootState): number => state.app.requestsInFlight;
export const selectNetworkBusy = (state: RootState): boolean => state.app.requestsInFlight > 0;
export const selectAppError = (state: RootState): Error | undefined => state.app.error;
export const selectUserNoEmail = (state: RootState): boolean | undefined => state.app.userNoEmail;
export const selectMenuVisible = (state: RootState): boolean => state.app.menuVisible;

export const {
  fetchUserExists,
  fetchUserNoEmail,
  fetchViewerUserByEmailSuccess,
  fetchError,
  incrementRequestsInFlight,
  decrementRequestsInFlight,
  fetchMenuVisible,
} = slice.actions;

export default slice.reducer;
