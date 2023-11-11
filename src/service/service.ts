import type { ResponseType, DetailsResponseType } from '../types/types';

export const fetchHeroes = async (
  search: string,
  pageSize: number,
  pageNumber: number,
): Promise<ResponseType> => {
  try {
    const response = await fetch(
      `https://api.disneyapi.dev/character/?name=${search}&pageSize=${pageSize}&page=${pageNumber}`,
    );
    return await response.json();
  } catch {
    throw new Error('Unable to fetch posts');
  }
};

export const getDetails = async (id: string): Promise<DetailsResponseType> => {
  try {
    const response = await fetch(`https://api.disneyapi.dev/character/${id}`);
    return await response.json();
  } catch {
    throw new Error('Unable to fetch posts');
  }
};
