import apiSlice from '../apiSlice'

import firestore from '@react-native-firebase/firestore'
import { AuthState } from '../../auth/slice'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

import {
  IAddServiceResult,
  IAddServicesQuery,
  IRemoveServiceQuery,
  IRemoveServiceResult,
  IUpdateServiceResult,
  IUpdateUserServiceQuery,
  IUserServiceDocument
} from './types'
import { IUserServiceData } from '../../../../models/IGoodsAndService'

const collectionName = 'userServices'
const subCollectionName = 'services'

export const userServicesApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getItems: builder.query<IUserServiceDocument[], any>({
      providesTags: ['userServices'],
      queryFn: async ({}, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }

        const collectionRef = firestore()
          .collection(collectionName)
          .doc(authSlice.user?.uid)
          .collection(subCollectionName)

        try {
          const array: IUserServiceDocument[] = []
          const documents = (await collectionRef.get()).docs.forEach((doc) =>
            array.push({ data: doc.data() as IUserServiceData, id: doc.id })
          )

          return { data: array }
        } catch (error: any) {
          return { error: { data: error.message, status: 500 } }
        }
      }
    }),
    getOneItem: builder.query<IUserServiceDocument, { id: string | undefined }>({
      providesTags: ['userServiceOne'],
      queryFn: async ({ id }, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }

        try {
          const data = await firestore()
            .collection(collectionName)
            .doc(authSlice.user?.uid)
            .collection(subCollectionName)
            .doc(id)
            .get()
          if (data.exists) {
            return { data: { data: data.data(), id: data.id } as IUserServiceDocument }
          } else {
            return { error: { data: 'document does not exist', status: 404 } }
          }
        } catch (error: any) {
          return { error: { data: error.message, status: 500 } }
        }
      }
    }),

    addItem: builder.mutation<IAddServiceResult, IAddServicesQuery>({
      invalidatesTags: ['userServices', 'photoGallery', 'userServiceOne'],
      queryFn: async ({ data }, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }
        const collectionRef = firestore()
          .collection(collectionName)
          .doc(authSlice.user?.uid)
          .collection(subCollectionName)

        if (data) {
          try {
            const result = await collectionRef.add(data)

            return { data: { result: 'created', docId: result.id } }
          } catch (error: any) {
            return { error: { data: error.message, status: 500 } }
          }
        } else {
          return { error: { data: 'item saving failed', status: 400 } }
        }
      }
    }),
    updateItem: builder.mutation<IUpdateServiceResult, IUpdateUserServiceQuery>({
      invalidatesTags: ['userServices', 'photoGallery', 'userServiceOne'],
      queryFn: async ({ data, id }, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }
        const collectionRef = firestore()
          .collection(collectionName)
          .doc(authSlice.user?.uid)
          .collection(subCollectionName)
          .doc(id)

        if (data && id) {
          try {
            await collectionRef.update(data)
            return { data: { result: 'updated' } }
          } catch (error: any) {
            return { error: { data: error.message, status: 500 } }
          }
        } else {
          return { error: { data: 'item updating failed', status: 400 } }
        }
      }
    }),
    removeItem: builder.mutation<IRemoveServiceResult, IRemoveServiceQuery>({
      invalidatesTags: ['userServices', 'photoGallery'],
      queryFn: async ({ id }: IRemoveServiceQuery, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }
        const docRef = firestore()
          .collection(collectionName)
          .doc(authSlice.user?.uid)
          .collection(subCollectionName)
          .doc(id)

        if (id) {
          try {
            await docRef.delete()
            return { data: 'removed' }
          } catch (error: any) {
            return { error: { data: error.message, status: 500 } }
          }
        } else {
          return { error: { data: 'item removing failed', status: 400 } }
        }
      }
    })
  })
})

export default userServicesApi

export const {
  useGetOneItemQuery,
  useAddItemMutation,
  useGetItemsQuery,
  useRemoveItemMutation,
  useUpdateItemMutation
} = userServicesApi
