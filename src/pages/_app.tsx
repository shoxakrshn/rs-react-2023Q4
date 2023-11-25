import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import { Provider } from 'react-redux';
import Layout from '@/components/Layout/Layout';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}
