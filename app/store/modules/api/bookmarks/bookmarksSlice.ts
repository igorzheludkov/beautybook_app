import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import apiSlice from '../apiSlice'

import firestore from '@react-native-firebase/firestore'
import { AuthState } from '../../auth/slice'

import { IProfileForm } from '../../../../models/IProfileForm'
import { IBookmarkQuery } from './types'

const collectionName = 'bookmarks'

export const bookmarksApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getBookmarks: builder.query({
      providesTags: ['bookmarksList'],
      queryFn: async ({ subCollection }: IBookmarkQuery, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }

        const collectionRef = firestore()
          .collection(collectionName)
          .doc(authSlice.user?.uid)
          .collection(subCollection)

        if (subCollection) {
          try {
            const array: IProfileForm[] = [] 
            const documents = (await collectionRef.get()).docs.forEach((doc) => array.push(doc.data()))

            return { data: array }
          } catch (error: any) {
            return { error: { data: error.message, status: 500 } }
          }
        } else {
          return { error: { data: 'bookmark reading failed', status: 400 } }
        }
      }
    }),

    saveBookmark: builder.mutation({
      invalidatesTags: ['bookmarksList'],
      queryFn: async ({ data, subCollection }: IBookmarkQuery, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }
        const collectionRef = firestore()
          .collection(collectionName)
          .doc(authSlice.user?.uid)
          .collection(subCollection)

        if (data && subCollection) {
          try {
            await collectionRef.add(data)

            return { data: 'bookmark saved' }
          } catch (error: any) {
            return { error: { data: error.message, status: 500 } }
          }
        } else {
          return { error: { data: 'bookmark saving failed', status: 400 } }
        }
      }
    })
  })
})

export default bookmarksApi

export const { useSaveBookmarkMutation, useGetBookmarksQuery } = bookmarksApi
