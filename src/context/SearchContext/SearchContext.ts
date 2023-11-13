import React, { useContext } from 'react';

type SearchType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = React.createContext<SearchType | undefined>(
  undefined,
);

export const useSearchContext = () => {
  const search = useContext(SearchContext);

  if (search === undefined) {
    throw new Error('useSearchContext must be used in SearchContext');
  }

  return search;
};
