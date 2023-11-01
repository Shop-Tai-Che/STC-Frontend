import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../utils/type";

type InitialStateType = {
  id: number;
  name: string;
  completed: boolean;
  product: Product;
};

const initialState: InitialStateType[] = [
  {
    id: 1,
    name: "learn",
    completed: false,
    product: {
      id: 12,
      name: "Áo Thun Phối Bóng Đá Karants Local Brand Hot Trend Form Oversize",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8e5kkcxwwoc3",
      price: 30000,
      categoryId: ["giày dép", "quần áo"],
      description:
        "[Mã FATREND2810 giảm đến 30k tối đa 99k] Áo Thun Phối Bóng Đá Karants Local Brand Hot Trend Form Oversize - KR63",
    },
  },
  {
    id: 2,
    name: "learn",
    completed: false,
    product: {
      id: 2,
      name: "Áo Thun Phối Bóng Đá Karants Local Brand Hot Trend Form Oversize",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8e5kkcxwwoc3",
      price: 30000,
      categoryId: ["giày dép", "quần áo"],
      description:
        "[Mã FATREND2810 giảm đến 30k tối đa 99k] Áo Thun Phối Bóng Đá Karants Local Brand Hot Trend Form Oversize - KR63",
    },
  },
  {
    id: 3,
    name: "learn",
    completed: false,
    product: {
      id: 3,
      name: "Áo Thun Phối Bóng Đá Karants Local Brand Hot Trend Form Oversize",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8e5kkcxwwoc3",
      price: 30000,
      categoryId: ["giày dép", "quần áo"],
      description:
        "[Mã FATREND2810 giảm đến 30k tối đa 99k] Áo Thun Phối Bóng Đá Karants Local Brand Hot Trend Form Oversize - KR63",
    },
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
