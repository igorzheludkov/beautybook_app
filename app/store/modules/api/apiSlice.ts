import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'fake' }),
  tagTypes: [
    'personalData',
    'avatar',
    'servicesCategoriesData',
    'masterData',
    'photoGallery',
    'bookmarksList',
    'userServices',
    'userServiceOne',
  ],
  endpoints: () => ({})
})

export default apiSlice
