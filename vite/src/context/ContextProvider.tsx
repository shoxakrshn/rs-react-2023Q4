import { CharactersProvider } from './CharactersContext/CharactersProvider';
import { PageProvider } from './PageContext/PageProvider';
import { SearchProvider } from './SearchContext/SearchProvider';

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <PageProvider>
    <SearchProvider>
      <CharactersProvider>{children}</CharactersProvider>
    </SearchProvider>
  </PageProvider>
);
