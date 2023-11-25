import {
  // PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import searchReducer from './slices/search.slice';
import pageReducer from './slices/page.slice';
import { disneyApi } from './query/api';
import { createWrapper } from 'next-redux-wrapper';

export const rootReducer = combineReducers({
  search: searchReducer,
  page: pageReducer,
  [disneyApi.reducerPath]: disneyApi.reducer,
});

export const setupStore = () =>
  // preloadedState?: PreloadedState<RootState>
  configureStore({
    reducer: rootReducer,
    // preloadedState,
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(disneyApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(setupStore);
