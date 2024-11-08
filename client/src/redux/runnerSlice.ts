import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Runner } from '../interfaces/runner';

// Define the initial state
interface RunnerState {
  runnerInstance: Runner | null;
}

const initialState: RunnerState = {
  runnerInstance: null,
};

// Create the slice
const runnerSlice = createSlice({
  name: 'runner',
  initialState,
  reducers: {
    setRunnerInstance: (state, action: PayloadAction<Runner>) => {
      state.runnerInstance = action.payload;
    },
  },
});

export const { setRunnerInstance } = runnerSlice.actions;
export default runnerSlice.reducer;
