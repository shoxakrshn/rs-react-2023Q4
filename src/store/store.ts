import { combineReducers, configureStore } from '@reduxjs/toolkit';
import controlReducer from './slices/control.slice';
import uncontrolReducer from './slices/uncontrol.slice';
import countriesReducer from './slices/counries.slice';

const rootReducer = combineReducers({
  countries: countriesReducer,
  control: controlReducer,
  uncontrol: uncontrolReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
