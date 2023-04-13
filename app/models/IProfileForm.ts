import { CitiesDataTypes } from './ICities'
import { IPhotoGallery } from './IPhotoGallery'

export interface IProfileForm {
  name?: string
  phone?: string
  city?: CitiesDataTypes
  street?: string
  skills?: ISkillsItem[]
  avatar?: string
  aboutMe?: string
  description?: string
  id?: string
  instagram?: string
  telegram?: string
  tiktok?: string
  facebook?: string
  highlight?: Highlight
  galleryPhotos?: IPhotoGallery[]
  galleryExperience?: IPhotoGallery[]
  galleryFeedback?: IPhotoGallery[]
}

export interface ISkillsItem {
  id: string
  title: string
}

export type Highlight = { title?: string; description?: string }
