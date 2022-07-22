import { configureStore } from '@reduxjs/toolkit'
import counter from "../redux/reducer.js";
export const store1 = configureStore({
  reducer: {CounterReducer:counter},
})