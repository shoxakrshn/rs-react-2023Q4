import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ResponseType, DetailsResponseType } from '../types/types';

type optionsType = {
  search: string;
  pageSize: number;
  pageNumber: number;
};

export const disneyApi = createApi({
  reducerPath: 'disneyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.disneyapi.dev/',
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ResponseType, optionsType>({
      query: ({ search = '', pageSize = 10, pageNumber = 1 }) =>
        `character/?name=${search}&pageSize=${pageSize}&page=${pageNumber}`,
    }),

    getDetails: builder.query<DetailsResponseType, string>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetDetailsQuery } = disneyApi;
