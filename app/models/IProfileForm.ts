import { CitiesDataTypes } from './ICities'

export interface IProfileForm {
  name?: string
  phone?: string
  city?: CitiesDataTypes
  street?: string
  skills?: string[]
  avatar?: string
  description?: string
  id?: string
  instagram?: string
  telegram?: string
  tiktok?: string
  facebook?: string
}
