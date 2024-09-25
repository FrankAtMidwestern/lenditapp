import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {ItemType} from '@utils/types';

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({baseUrl: 'https://your-api-url.com'}),
  endpoints: builder => ({
    getItems: builder.query<ItemType[], void>({
      query: () => '/items',
      // Enable caching
      keepUnusedDataFor: 60 * 60, // Keep data for 1 hour
    }),
    // Define mutations and other endpoints
  }),
});

export const {useGetItemsQuery} = apiService;
