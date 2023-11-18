import { configureStore } from '@reduxjs/toolkit';
import basicReducer from './slice';
import { disneyApi } from './api';

export const store = configureStore({
  reducer: {
    basic: basicReducer,
    [disneyApi.reducerPath]: disneyApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(disneyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
