import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store';

interface  ObjectItemFilterSlideType  { 
    search: string,
    status: string,
    priorities: string[] 
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
    PrioritiesFilterChange: (state, action: PayloadAction<string[]>) => {
      state.priorities = action.payload;
    },
  },
});

export const { searchFilterChange, statusFilterChange, PrioritiesFilterChange } = objectItemFilterSlide.actions
export const selectFilter = (state: RootState) => state

export default objectItemFilterSlide.reducer

