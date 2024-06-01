import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  output: '0',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    updateOutput: (state, action) => {
      const val = action.payload;
      if (val === 'CE') {
        state.output = '0';
      } else if (val === '=') {
        try {
          state.output = eval(state.output);
        } catch {
          state.output = 'Error';
          setTimeout(() => {
            state.output = '0';
          }, 1500);
        }
      } else {
        state.output = (state.output === '0' ? val : state.output + val);
      }
    },
  },
});


export const { updateOutput } = calculatorSlice.actions;

