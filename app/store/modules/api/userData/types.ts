import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

export interface IPersonalData {
  name: string
  phone: string
}

export interface IError {
    data: string
    status: number
}
