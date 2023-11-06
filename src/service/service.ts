import { IHero, IResponse } from '../types/types';

export const fetchHeroes = async (api: string): Promise<IResponse> => {
  try {
    const response = await fetch(api);
    return await response.json();
  } catch {
    throw new Error('Unable to fetch posts');
  }
};

export const getHero = async (id: string): Promise<IHero> => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    return await response.json();
  } catch {
    throw new Error('Unable to fetch posts');
  }
};
