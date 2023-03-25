import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import apiSlice from '../apiSlice'

import { IServicesCategories } from '../../../../models/IServicesCategories'

import firestore from '@react-native-firebase/firestore'

const collectionName = 'servicesCategories'

export const servicesCategoriesApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getServiceCategories: builder.query({
      providesTags: ['servicesCategoriesData'],
      queryFn: async () => {
        let extractedArray: IServicesCategories[] = []

        const data = await firestore().collection(collectionName).get()

        data.forEach((item) => extractedArray.push(item.data() as IServicesCategories))

        if (extractedArray.length) {
          return { data: extractedArray }
        } else {
          return { error: { data: 'collection does not exist or empty', status: 404 } as FetchBaseQueryError }
        }
      }
    })
  })
})

export default servicesCategoriesApi

export const { useGetServiceCategoriesQuery } = servicesCategoriesApi
