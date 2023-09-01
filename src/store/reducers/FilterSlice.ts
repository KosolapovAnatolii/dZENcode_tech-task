import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SortTypes } from "../../Types/Filter";

interface FilterState {
  query: string;
  sort: SortTypes
};

const initialState: FilterState = {
  query: '',
  sort: SortTypes.All,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setSort(state, action: PayloadAction<SortTypes>) {
      state.sort = action.payload;
    },
  }
});

export default filterSlice.reducer;