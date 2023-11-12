import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useNavigate, useParams } from 'react-router-dom';

const MainPage: React.FC = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();

  const savedSearch = localStorage.getItem('searchKey');
  const [search, setSearch] = useState<string>(savedSearch ?? '');
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  useEffect(
    () => navigate(`/page/${pageId ?? 1}`, { replace: true }),
    [pageId],
  );

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setItemsPerPage={setItemsPerPage}
      />

      <List search={search} page={+(pageId || 1)} itemsPerPage={itemsPerPage} />
    </>
  );
};

export default MainPage;
