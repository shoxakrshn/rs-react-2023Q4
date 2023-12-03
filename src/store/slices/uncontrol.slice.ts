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

const uncontrolSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    saveData: (state, action: PayloadAction<FormDataType>) => {
      state = action.payload;
    },
  },
});

export const { saveData } = uncontrolSlice.actions;
export default uncontrolSlice.reducer;

export const selectUncontrol = (state: RootState) => state.uncontrol;
