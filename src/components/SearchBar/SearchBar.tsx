import React, { useEffect, useRef, useState } from 'react';
import { IHero, IResponse } from '../../types/types';
import { fetchHeroes, searchHeroes } from '../../service/service';

interface PropsType {
  cbHeroes: (heroes: IHero[]) => void;
  cbLoading: (loading: boolean) => void;
}

const SearchBar: React.FC<PropsType> = ({ cbHeroes, cbLoading }) => {
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchKey') || '',
  );

  const [error, setError] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    fetchData();
  }, []);

  const fetchData = async () => {
    if (searchValue.length !== 0) {
      try {
        cbLoading(true);

        const { results }: IResponse = await searchHeroes(searchValue);

        cbHeroes(results);
        cbLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    } else {
      try {
        cbLoading(true);

        const { results }: IResponse = await fetchHeroes();
        cbHeroes(results);

        cbLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('searchKey', searchValue);

    fetchData();
  };

  const showErrorBoundry = () => {
    setError('Show Error Boundry');
  };

  if (error) throw new Error();

  return (
    <form onSubmit={submitHandler} className="">
      <input
        className="px-3 py-2 mr-4 rounded"
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={changeHandler}
        ref={inputRef}
      />
      <button type="submit">Get heroes</button>
      <button onClick={showErrorBoundry}>Get Error</button>
    </form>
  );
};

export default SearchBar;
