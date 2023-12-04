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
  agreement: false,
  picture: '',
  country: '',
};

const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    saveControlledData: (state, action: PayloadAction<FormDataType>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { saveControlledData } = controlSlice.actions;
export default controlSlice.reducer;

export const selectControl = (state: RootState) => state.control;
