import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store';
import { Product } from "../utils/type/Product";
interface  ObjectItemFilterSlideType  {
    map(arg0: (product: any, index: any) => import("react").JSX.Element): import("react").ReactNode; 
    search: string,
    status: string,
    priorities: Product[] 
};

const initialState: ObjectItemFilterSlideType  = {
  search: "",
  status: "All",
  priorities: [],
};

const objectItemFilterSlide = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchFilterChange: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    PrioritiesFilterChange: (state, action: PayloadAction<Product[]>) => {
      state.priorities = action.payload;
    },
  },
});

export const { searchFilterChange, statusFilterChange, PrioritiesFilterChange } = objectItemFilterSlide.actions
export const selectFilter = (state: RootState) => state

export default objectItemFilterSlide.reducer

