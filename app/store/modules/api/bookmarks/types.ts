import { IProfileForm } from '../../../../models/IProfileForm'

export interface IError {
    data: string
    status: number
}

export interface IBookmarkQuery {
  data?: IProfileForm
  subCollection: 'services' | 'goods'
}

