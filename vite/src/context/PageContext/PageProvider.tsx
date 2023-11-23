import { useParams } from 'react-router-dom';
import { PageContext } from './PageContext';

type ProviderType = {
  children: React.ReactNode;
};
export const PageProvider: React.FC<ProviderType> = ({ children }) => {
  const { pageId } = useParams();

  return (
    <PageContext.Provider value={+(pageId || 1)}>
      {children}
    </PageContext.Provider>
  );
};
