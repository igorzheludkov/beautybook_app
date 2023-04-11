import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import apiSlice from '../apiSlice'

import { IServicesCategories } from '../../../../models/IServicesCategories'

import firestore from '@react-native-firebase/firestore'
import { CitiesDataTypes } from '../../../../models/ICities'

const collectionName = 'servicesCategories'

export const filterCategories = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getServiceCategories: builder.query({
      providesTags: ['servicesCategoriesData'],
      queryFn: async () => {
        let extractedArray: IServicesCategories[] = []

        const data = await firestore().collection(collectionName).get()

        data.forEach((item) => extractedArray.push(item.data() as IServicesCategories))

        if (extractedArray.length) {
          return { data: extractedArray as IServicesCategories[]}
        } else {
          return { error: { data: 'collection does not exist or empty', status: 404 } as FetchBaseQueryError }
        }
      }
    }),
    getCities: builder.query({
      providesTags: ['servicesCategoriesData'],
      queryFn: async () => {
        const result = (await firestore().collection('oblasts').doc('cities').get()).data()

        if (result) {
          return { data: result as CitiesDataTypes[] }
        } else {
          return { error: { data: 'collection does not exist or empty', status: 404 } as FetchBaseQueryError }
        }
      }
    }),
    updateCities: builder.mutation({
      invalidatesTags: ['servicesCategoriesData'],
      queryFn: async ({ data }: any, thunkAPI) => {
        const citiesRef = firestore().collection('oblasts').doc('cities')

        if (data) {
          try {
            const citiesExist = (await citiesRef.get()).exists
            if (citiesExist) {
              await citiesRef.update(data)
            } else {
              await citiesRef.set(data)
            }

            return { data: 'cities updated' }
          } catch (error: any) {
            return { error: { data: error.message, status: 500 } }
          }
        } else {
          return { error: { data: 'update failed', status: 400 } }
        }
      }
    })
  })
})

export default filterCategories

export const { useGetServiceCategoriesQuery, useGetCitiesQuery, useUpdateCitiesMutation } =
filterCategories
