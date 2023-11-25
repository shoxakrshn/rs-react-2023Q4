import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

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

const searchSlice = createSlice({
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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export const {
  updateSearch,
  updateItemsPerPage,
  updateLoaderSearch,
  updateLoaderDetails,
} = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;
