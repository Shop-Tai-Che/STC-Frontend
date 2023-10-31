import { configureStore } from "@reduxjs/toolkit";
import filtersSliceReducer from "./FilterSlice"; 
import todoSliceReducer from "./TodoSlice";

export const Store = configureStore({
  reducer: {
    filters: filtersSliceReducer,
    tododes:todoSliceReducer 
  },
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store

