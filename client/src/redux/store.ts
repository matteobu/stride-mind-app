import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import runnerReducer from './runnerSlice';

export const store = configureStore({
  reducer: {
    runner: runnerReducer, // Add runner slice to the store
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
