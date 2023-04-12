import { IPhotoGallery } from "./IPhotoGallery"
import { IServicesCategories } from "./IServicesCategories"

export interface IUserServiceData {
  title?: string
  price?: string
  duration?: string
  description?: string
  categoryId?: string
  categoryData?: IServicesCategories
  images?: IPhotoGallery[] | undefined
}
