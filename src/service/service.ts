import { IResponse } from '../types/types';

export const fetchHeroes = async (): Promise<IResponse> => {
  try {
    const response = await fetch('https://swapi.dev/api/people/?page=1');
    return await response.json();
  } catch {
    throw new Error('Unable to fetch posts');
  }
};

export const searchHeroes = async (search: string): Promise<IResponse> => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${search}`,
    );
    return await response.json();
  } catch {
    throw new Error('Unable to fetch posts');
  }
};
