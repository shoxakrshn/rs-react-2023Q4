import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { countries } from '../../utils/countries';

type StateType = {
  countries: string[];
};

const initialState: StateType = {
  countries,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;

export const selectCountries = (state: RootState) => state.countries;
