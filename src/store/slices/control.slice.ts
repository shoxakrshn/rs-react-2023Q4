import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FormDataType } from '../../utils/types';

const initialState: FormDataType = {
  name: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
  agreement: '',
  picture: '',
  country: '',
};

const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    saveData: (state, action: PayloadAction<FormDataType>) => {
      state = action.payload;
    },
  },
});

export const { saveData } = controlSlice.actions;
export default controlSlice.reducer;

export const selectControl = (state: RootState) => state.control;
