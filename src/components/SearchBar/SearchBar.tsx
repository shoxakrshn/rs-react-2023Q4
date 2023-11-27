import React, { useEffect, useRef, useState } from 'react';
import { useAppRouter } from '@/hooks/useAppRouter';

const SearchBar: React.FC = () => {
  const { router, limit, search } = useAppRouter();

  const [searchValue, setSearchValue] = useState<string>(search as string);
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const href = search
      ? {
          pathname: '/',
          query: { page: '1', limit: e.target.value, search },
        }
      : {
          pathname: '/',
          query: { page: '1', limit: e.target.value },
        };
    router.push(href);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current?.focus();

    const trimedSearchValue = searchValue.trim();

    const href = searchValue
      ? {
          pathname: '/',
          query: { page: '1', limit, search: trimedSearchValue },
        }
      : {
          pathname: '/',
          query: { page: '1', limit },
        };

    router.push(href);
  };

  const showErrorBoundry = () => {
    setError('Show Error Boundry');
  };

  if (error) throw new Error();

  return (
    <form onSubmit={submitHandler}>
      <input
        className="px-3 py-2 mr-4 rounded"
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={changeHandler}
        ref={inputRef}
      />
      <select onChange={onSelectHandler} value={limit}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <button type="submit">Get heroes</button>
      <button onClick={showErrorBoundry}>Get Error</button>
    </form>
  );
};

export default SearchBar;
