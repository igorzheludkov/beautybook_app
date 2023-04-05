import { CitiesDataTypes } from './ICities'

export interface IProfileForm {
  name?: string
  phone?: string
  city?: CitiesDataTypes
  street?: string
  skills?: string[]
  avatar?: string
  aboutMe?: string
  id?: string
}
