import '@testing-library/jest-dom';

import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './src/mocks/node';
import { setupStore } from './src/redux/store';
import { disneyApi } from './src/redux/api';

const store = setupStore({});

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  store.dispatch(disneyApi.util.resetApiState());
});
afterAll(() => server.close());
