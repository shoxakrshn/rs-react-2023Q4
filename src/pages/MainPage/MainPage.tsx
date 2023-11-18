import React, { useEffect } from 'react';
import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';

const MainPage: React.FC = () => {
  const [searhParams, setSearchParams] = useSearchParams();
  const currentPage = searhParams.get('page');

  useEffect(() => {
    setSearchParams({ page: currentPage ?? '1' });
  }, [currentPage]);

  return (
    <main>
      <SearchBar />
      <List />
    </main>
  );
};

export default MainPage;
