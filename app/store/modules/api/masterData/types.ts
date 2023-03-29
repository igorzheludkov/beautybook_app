import { IProfileForm } from '../../../../models/IProfileForm'

export interface IError {
    data: string
    status: number
}

export interface IQuery {
  data?: IProfileForm
}
