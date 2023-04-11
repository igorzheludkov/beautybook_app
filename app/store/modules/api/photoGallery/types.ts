import { ImagePickerResponse } from 'react-native-image-picker'
import { IProfileForm } from '../../../../models/IProfileForm'
import { StorageRootFolders, StorageGroupFolders } from '../../../../models/EStorageFolders'

export interface IError {
  data: string
  status: number
}

export interface IGetPhotosQuery {
  userId: string | undefined
  page: number | undefined
  rootFolder: StorageRootFolders
  groupFolder: StorageGroupFolders
  itemFolder?: string //folder for some item files
}
export interface IRemovePhotosQuery {
  userId: string | undefined
  photoId: string | undefined
  rootFolder: StorageRootFolders
  groupFolder: StorageGroupFolders
  itemFolder?: string //folder for some item files
}
export interface IUploadPhotosQuery {
  userId: string | undefined
  images: ImagePickerResponse['assets'] | undefined
  rootFolder: StorageRootFolders
  groupFolder: StorageGroupFolders
  itemFolder?: string //folder for some item files
}