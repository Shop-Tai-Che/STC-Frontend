import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../utils/type";

type InitialStateType = {
  id: number;
  name: string;
  completed: boolean;
  product: Product;
};

const initialState: InitialStateType[] = [];

const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<InitialStateType>) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action: PayloadAction<number>) => {
      const currentTodo = state.find((toDo) => toDo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
    addProductList: (state, action: PayloadAction<Product>) => {
      state.push({
        id: 3,
        name: "learn",
        completed: false,
        product: action.payload,
      });
    },
  },
});

export const { addTodo, toggleTodoStatus, addProductList } =
  todoListSlice.actions;
export default todoListSlice.reducer;
