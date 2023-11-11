import React, { useEffect, useState } from 'react';
import type { CharacterType } from '../../types/types';
import Item from '../Item/Item';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import { fetchHeroes } from '../../service/service';
import { Outlet } from 'react-router-dom';

type PropsType = {
  search: string;
  page: number;
  itemsPerPage: number;
};

const List: React.FC<PropsType> = ({ search, page, itemsPerPage }) => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);
      const {
        data,
        info: { nextPage, previousPage },
      } = await fetchHeroes(search, itemsPerPage, page);

      setCharacters(data);
      setNextPage(nextPage);
      setPrevPage(previousPage);
      setIsLoading(false);
    };

    getItems();
  }, [search, itemsPerPage, page]);

  if (characters.length === 0) {
    return <p>no results</p>;
  }

  return (
    <main>
      <Pagination nextPage={nextPage} prevPage={prevPage} currentPage={page} />
      <div className="flex gap-4">
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="flex flex-wrap gap-x-2  basis-[300px] grow max-w-[853px] gap-y-5 mb-4">
            {characters.map((character) => (
              <Item character={character} key={character._id} />
            ))}
          </ul>
        )}
        <Outlet context={page} />
      </div>
    </main>
  );
};

export default List;
