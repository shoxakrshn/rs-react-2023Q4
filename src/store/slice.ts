import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type StateType = {
  search: string;
  pageSize: number;
  loaderSearch: boolean;
  loaderDetails: boolean;
};

const initialState: StateType = {
  search: '',
  pageSize: 10,
  loaderSearch: false,
  loaderDetails: false,
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

    updateLoaderSearch: (state, action: PayloadAction<boolean>) => {
      state.loaderSearch = action.payload;
    },

    updateLoaderDetails: (state, action: PayloadAction<boolean>) => {
      state.loaderDetails = action.payload;
    },
  },
});

export const {
  updateSearch,
  updateItemsPerPage,
  updateLoaderSearch,
  updateLoaderDetails,
} = basicSlice.actions;

export const selectBasic = (state: RootState) => state.basic;

export default basicSlice.reducer;
