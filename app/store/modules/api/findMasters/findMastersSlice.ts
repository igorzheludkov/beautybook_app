import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import apiSlice from '../apiSlice'

import firestore from '@react-native-firebase/firestore'
import { IProfileForm } from '../../../../models/IProfileForm'

const collectionName = 'users'

export const findMastersApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getFilteredMasters: builder.query({
      queryFn: async ({ category, city }) => {
        const filterRef = firestore().collection(collectionName)
        const searchResults: IProfileForm[] = []
        if (category.length) {
          await filterRef
            .where('skills', 'array-contains-any', category)
            .where('city.id', '==', city || '')
            .get()
            .then((data) => data.docs.forEach((item) => searchResults.push(item.data() as IProfileForm)))
        } else {
          await filterRef
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

export default findMastersApi

export const { useGetFilteredMastersQuery } = findMastersApi
