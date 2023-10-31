import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./TodoSlice";

export const Store = configureStore({
  reducer: {
    tododes:todoSliceReducer 
  },
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store

