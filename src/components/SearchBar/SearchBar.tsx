import React, { useEffect, useRef, useState } from 'react';
import {
  getFromLocalStorage,
  saveInLocalStorage,
  getSearchType,
} from '../../service/helpers';

interface PropsType {
  setSearch: (value: string) => void;
  setCurrentPageUrl: (value: string) => void;
  setCurrentPage: (value: number) => void;
}

const SearchBar: React.FC<PropsType> = ({
  setSearch,
  setCurrentPage,
  setCurrentPageUrl,
}) => {
  const [searchValue, setSearchValue] = useState<string>(getFromLocalStorage());

  const [error, setError] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current?.focus();

    saveInLocalStorage(searchValue);
    setCurrentPage(1);
    setSearch(searchValue.trim());

    const currentPageType = getSearchType(searchValue.trim());

    setCurrentPageUrl(currentPageType);
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
