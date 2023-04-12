import { IUserServiceData } from '../../../../models/IGoodsAndService'

export interface IError {
  data: string
  status: number
}
export interface IUserServiceDocument {
  id: string
  data: IUserServiceData
}

export interface IAddServicesQuery {
  data?: IUserServiceData
}


export interface IAddServiceResult {
  result: 'created'
  docId: string
}

export interface IUpdateUserServiceQuery {
  id: string
  data: IUserServiceData
}

export interface IUpdateServiceResult {
  result: 'updated'
}

export interface IRemoveServiceQuery {
  id: string | undefined
}

export type IRemoveServiceResult = 'removed' | undefined
