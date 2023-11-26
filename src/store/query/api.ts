import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ResponseType, DetailsResponseType } from '../../types/types';
import { HYDRATE } from 'next-redux-wrapper';

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
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
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

export const {
  useGetCharactersQuery,
  useGetDetailsQuery,
  util: { getRunningQueriesThunk },
} = disneyApi;
export const { getCharacters, getDetails } = disneyApi.endpoints;
