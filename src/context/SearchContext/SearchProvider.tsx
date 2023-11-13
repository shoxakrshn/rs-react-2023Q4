import { useState } from 'react';
import { SearchContext } from './SearchContext';

type ProviderType = {
  children: React.ReactNode;
};

export const SearchProvider: React.FC<ProviderType> = ({ children }) => {
  const savedSearch = localStorage.getItem('searchKey');
  const [search, setSearch] = useState<string>(savedSearch ?? '');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
