import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { useAppDispatch } from '../../redux/hooks';
import { updateSearch, updateItemsPerPage } from '../../redux/slice';

const SearchBar: React.FC = () => {
  const { search } = useAppSelector((state) => state.basic);
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState<string>(search);
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  useEffect(() => inputRef.current?.focus(), []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateItemsPerPage(+e.target.value));
    navigate('/?page=1', { replace: true });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current?.focus();

    const trimedSearchValue = searchValue.trim();

    localStorage.setItem('searchKey', trimedSearchValue);
    dispatch(updateSearch(trimedSearchValue));
    navigate('/?page=1', { replace: true });
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
