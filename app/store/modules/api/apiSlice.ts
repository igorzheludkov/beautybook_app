import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'fake' }),
  tagTypes: ['personalData', 'avatar', 'servicesCategoriesData'],
  endpoints: () => ({})
})

export default apiSlice
