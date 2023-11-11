import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type PropsType = {
  search: string;
  setSearch: (value: string) => void;
  setItemsPerPage: (value: number) => void;
};

const SearchBar: React.FC<PropsType> = ({
  search,
  setSearch,
  setItemsPerPage,
}) => {
  const [searchValue, setSearchValue] = useState<string>(search);
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  useEffect(() => inputRef.current?.focus(), []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+e.target.value);
    navigate('/page/1', { replace: true });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current?.focus();

    const trimedSearchValue = searchValue.trim();

    localStorage.setItem('searchKey', trimedSearchValue);
    setSearch(trimedSearchValue);
    navigate('/page/1', { replace: true });
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
      <select onChange={onSelectHandler}>
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
