import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import apiSlice from '../apiSlice'

import firestore from '@react-native-firebase/firestore'
import { IProfileForm } from '../../../../models/IProfileForm'

const collectionName = 'users'

export const filtersMasterApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getFilteredMasters: builder.query({
      queryFn: async (arg) => {
        const searchResults: IProfileForm[] = []
        if (arg.length) {
          await firestore()
            .collection(collectionName)
            .where('skills', 'array-contains-any', arg)
            .get()
            .then((data) => data.docs.forEach((item) => searchResults.push(item.data() as IProfileForm)))
        } else {
          await firestore()
            .collection(collectionName)
            .get()
            .then((data) => data.docs.forEach((item) => searchResults.push(item.data() as IProfileForm)))
        }

        if (searchResults.length) {
          return { data: searchResults }
        } else {
          return { error: { data: 'users not found', status: 404 } as FetchBaseQueryError }
        }
      }
    })
  })
})

export default filtersMasterApi

export const { useGetFilteredMastersQuery } = filtersMasterApi
