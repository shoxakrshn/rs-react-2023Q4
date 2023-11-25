import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';
import { updateSearch, updateItemsPerPage } from '../../store/slice';
import { useRouter } from 'next/router';

const SearchBar: React.FC = () => {
  const { search } = useAppSelector((state) => state.basic);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [searchValue, setSearchValue] = useState<string>(search);
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateItemsPerPage(+e.target.value));
    router.push(`/?page=1`);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current?.focus();

    const trimedSearchValue = searchValue.trim();

    localStorage.setItem('searchKey', trimedSearchValue);
    dispatch(updateSearch(trimedSearchValue));

    router.push(`/?page=1`);
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
