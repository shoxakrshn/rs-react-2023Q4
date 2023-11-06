import { API } from './model';

export const getFromLocalStorage = (value: string) =>
  localStorage.getItem(value) || '';

export const saveInLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const getSearchType = (search: string) =>
  search ? `${API.search}${search}` : API.getAll;
