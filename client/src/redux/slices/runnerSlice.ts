import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Runner, RunnerActivity } from '../../interfaces/runner';

// Define the initial state
interface RunnerState {
  runnerInstance: Runner | null;
  runnerActivities: RunnerActivity[];
}

const initialState: RunnerState = {
  runnerInstance: null,
  runnerActivities: [],
};

// Create the slice
const runnerSlice = createSlice({
  name: 'runner',
  initialState,
  reducers: {
    setRunnerInstance: (state, action: PayloadAction<Runner>) => {
      state.runnerInstance = action.payload;
    },
    setRunnerActivities: (state, action: PayloadAction<RunnerActivity[]>) => {
      state.runnerActivities = action.payload;
    },
  },
});

export const { setRunnerInstance, setRunnerActivities } = runnerSlice.actions;
export default runnerSlice.reducer;
