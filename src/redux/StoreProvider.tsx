import { Provider } from 'react-redux';
import { setupStore } from './store';

const store = setupStore();

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
