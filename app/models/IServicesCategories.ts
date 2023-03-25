type Item = {
  id: string
  title: string
  description: string
  image: string
}

type SubCategory = {
  id: string
  title: string
  description: string
  image: string
  subCategories: Item[] | []
}

export interface IServicesCategories {
  id: string
  title: string
  description: string
  image: string
  subCategories: SubCategory[] | []
}
