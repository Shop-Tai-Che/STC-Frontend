import { configureStore } from "@reduxjs/toolkit";
import filtersSliceReducer from "./FilterSlice"; 

export const Store = configureStore({
  reducer: {
    filters: filtersSliceReducer, 
  },
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store

