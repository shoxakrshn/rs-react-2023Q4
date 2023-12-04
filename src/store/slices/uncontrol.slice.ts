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

const uncontrolSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    saveUncontrolledData: (state, action: PayloadAction<FormDataType>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { saveUncontrolledData } = uncontrolSlice.actions;
export default uncontrolSlice.reducer;

export const selectUncontrol = (state: RootState) => state.uncontrol;
