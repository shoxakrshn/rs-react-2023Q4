import { IResponse } from '../types/types';

export const fetchHeroes = async (api: string): Promise<IResponse> => {
  try {
    const response = await fetch(api);
    return await response.json();
  } catch {
    throw new Error('Unable to fetch posts');
  }
};
