import { configureStore } from '@reduxjs/toolkit';
import { calculatorSlice } from './slices/calculatorSlices';

const store = configureStore({
  reducer: { calculate: calculatorSlice.reducer },
});

export default store;
