interface City {
  id: string
  name_uk: string
  name_en: string
  oblCenter?: boolean
}

export interface CitiesDataTypes {
  name_uk: string
  name_en: string
  id: string
  cities?: City[]
}
