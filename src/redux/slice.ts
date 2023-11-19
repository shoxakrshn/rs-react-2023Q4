import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type StateType = {
  search: string;
  pageSize: number;
};

const initialState: StateType = {
  search: localStorage.getItem('searchKey') ?? '',
  pageSize: 10,
};

const basicSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    updateSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    updateItemsPerPage: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
  },
});

export const { updateSearch, updateItemsPerPage } = basicSlice.actions;

export const selectBasic = (state: RootState) => state.basic;

export default basicSlice.reducer;
