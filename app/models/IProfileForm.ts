import { CitiesDataTypes } from './ICities'

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
}

export interface ISkillsItem {
  id: string
  title: string
}

