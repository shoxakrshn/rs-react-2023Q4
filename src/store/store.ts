import {
  // PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { disneyApi } from './query/disneyApi';
import { createWrapper } from 'next-redux-wrapper';

export const rootReducer = combineReducers({
  [disneyApi.reducerPath]: disneyApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware().concat(disneyApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(setupStore);
