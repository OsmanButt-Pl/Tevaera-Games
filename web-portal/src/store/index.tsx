import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';

import appReducer from '../features/app/AppSlice';

export const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
