import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import apiSlice from '../apiSlice'

import firestore from '@react-native-firebase/firestore'

import { IProfileForm } from '../../../../models/IProfileForm'

const collectionName = 'users'

export const masterDataApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    masterData: builder.query({
      providesTags: ['masterData'],
      queryFn: async (masterId: string) => {

        const data = await firestore().collection(collectionName).doc(masterId).get()

        if (data.exists) {
          return { data: data.data() as IProfileForm }
        } else {
          return { error: { data: 'document does not exist', status: 404 } as FetchBaseQueryError }
        }
      }
    })
  })
})

export default masterDataApi

export const { useMasterDataQuery } = masterDataApi
