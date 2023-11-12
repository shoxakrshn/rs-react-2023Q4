import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useNavigate, useParams } from 'react-router-dom';
import { ContextProvider } from '../../context/ContextProvider';

const MainPage: React.FC = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();

  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  useEffect(
    () => navigate(`/page/${pageId ?? 1}`, { replace: true }),
    [pageId],
  );

  return (
    <ContextProvider>
      <SearchBar setItemsPerPage={setItemsPerPage} />
      <List itemsPerPage={itemsPerPage} />
    </ContextProvider>
  );
};

export default MainPage;
