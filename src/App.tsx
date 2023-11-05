import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import HeroList from './components/HeroList/HeroList';
import Pagination from './components/Pagination/Pagination';
import SearchBar from './components/SearchBar/SearchBar';
import ErrorBoundry from './service/ErrorBoundry';
import { fetchHeroes } from './service/service';
import { IHero, IResponse } from './types/types';
import { getFromLocalStorage, getSearchType } from './service/helpers';

const App: React.FC = () => {
  const [search, setSearch] = useState<string>(getFromLocalStorage());
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [currentPageUrl, setCurrentPageUrl] = useState<string>(
    getSearchType(search),
  );
  const [prevPageUrl, setPrevPageUrl] = useState<string | null>('');
  const [nextPageUrl, setNextPageUrl] = useState<string | null>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const { results, next, previous }: IResponse =
          await fetchHeroes(currentPageUrl);

        setHeroes(results);
        setNextPageUrl(next);
        setPrevPageUrl(previous);

        setIsLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }
      }
    };

    fetchData();
  }, [search, currentPage, currentPageUrl]);

  const prevPage = useCallback(() => {
    if (prevPageUrl) {
      setCurrentPageUrl(prevPageUrl);
    }

    setCurrentPage((prev) => prev - 1);
  }, [prevPageUrl]);

  const nextPage = useCallback(() => {
    if (nextPageUrl) {
      setCurrentPageUrl(nextPageUrl);
    }

    setCurrentPage((prev) => prev + 1);
  }, [nextPageUrl]);

  return (
    <ErrorBoundry>
      <section className="search mb-4">
        <SearchBar
          setSearch={setSearch}
          setCurrentPage={setCurrentPage}
          setCurrentPageUrl={setCurrentPageUrl}
        />
      </section>
      <section className="result">
        {isLoading ? <p>Loading...</p> : <HeroList heroes={heroes} />}
      </section>
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        prevPageUrl={prevPageUrl}
        nextPageUrl={nextPageUrl}
      />
    </ErrorBoundry>
  );
};

export default App;
