import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    tagTypes: ["Product"],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/", }),
    endpoints: (builder) => ({}),
});