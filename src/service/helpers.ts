import { API } from './model';

export const getFromLocalStorage = () =>
  localStorage.getItem('searchKey') || '';

export const saveInLocalStorage = (value: string) =>
  localStorage.setItem('searchKey', value);

export const getSearchType = (search: string) =>
  search ? `${API.search}${search}` : API.getAll;
