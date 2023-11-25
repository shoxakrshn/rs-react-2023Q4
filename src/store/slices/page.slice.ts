import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

type StateType = {
  currentPage: number;
};

const initialState: StateType = {
  currentPage: 1,
};

const pageSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    returnFirstCurrentPage: (state) => {
      state.currentPage = 1;
    },

    updateNextPage: (state) => {
      state.currentPage += 1;
    },

    updatePrevPage: (state) => {
      state.currentPage -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action,
      };
    });
  },
});

export const { returnFirstCurrentPage, updateNextPage, updatePrevPage } =
  pageSlice.actions;

export const selectPage = (state: RootState) => state.page;

export default pageSlice.reducer;
