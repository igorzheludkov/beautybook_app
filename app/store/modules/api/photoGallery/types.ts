import { ImagePickerResponse } from 'react-native-image-picker'
import { IProfileForm } from '../../../../models/IProfileForm'

export interface IError {
  data: string
  status: number
}

export interface IQuery {
  data?: IProfileForm
}

export interface IUploadPhoto {
  image: ImagePickerResponse['assets']
}
