import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import firestore from '@react-native-firebase/firestore'
import { AuthState } from '../../auth/slice'
import { IPersonalData } from './types'
import { RootState } from '../../../store'

interface IQuery {
  data?: IPersonalData
}

const collectionName = 'users'
const currentUserSubcategory = 'profile'
const profileCategory = 'personalData'

export const userDataApi = createApi({
  reducerPath: 'userDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'fake' }),
  tagTypes: ['personalData'],
  endpoints: (builder) => ({
    profileData: builder.query({
      providesTags: ['personalData'],
      queryFn: async ({}, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }

        const data = await firestore()
          .collection(collectionName)
          .doc(authSlice.user?.uid)
          .collection(currentUserSubcategory)
          .doc(profileCategory)
          .get()

        if (data.exists) {
          return { data: data.data() as IPersonalData }
        } else {
          return { error: { data: 'document does not exist', status: 404 } as FetchBaseQueryError }
        }
      }
    }),

    updateProfileData: builder.mutation({
      invalidatesTags: ['personalData'],
      queryFn: async ({ data }: IQuery, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }

        if (data) {
          try {
            await firestore()
              .collection(collectionName)
              .doc(authSlice.user?.uid)
              .collection(currentUserSubcategory)
              .doc(profileCategory)
              .set(data)

            return { data: 'profile updated' }
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

export const { useProfileDataQuery, useUpdateProfileDataMutation } = userDataApi
