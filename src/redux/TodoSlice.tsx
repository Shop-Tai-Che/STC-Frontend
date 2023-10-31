import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  id: number;
  name: string;
  completed: boolean;
};

const initialState: InitialStateType[] = [
  {
    id: 1,
    name: "learn",
    completed: false,
  },
  {
    id: 2,
    name: "learn",
    completed: false,
  },
  {
    id: 3,
    name: "learn",
    completed: false,
  },
];

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
  },
});

export const { addTodo, toggleTodoStatus } = todoListSlice.actions;
export default todoListSlice.reducer;
