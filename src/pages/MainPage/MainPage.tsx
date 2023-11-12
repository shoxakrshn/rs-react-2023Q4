import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useNavigate, useParams } from 'react-router-dom';
import { SearchProvider } from '../../context/SearchContext/SearchProvider';
import { CharactersProvider } from '../../context/CharactersContext/CharactersProvider';
import { PageProvider } from '../../context/PageContext/PageProvider';

const MainPage: React.FC = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();

  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  useEffect(
    () => navigate(`/page/${pageId ?? 1}`, { replace: true }),
    [pageId],
  );

  return (
    <PageProvider>
      <SearchProvider>
        <CharactersProvider>
          <SearchBar setItemsPerPage={setItemsPerPage} />
          <List itemsPerPage={itemsPerPage} />
        </CharactersProvider>
      </SearchProvider>
    </PageProvider>
  );
};

export default MainPage;
