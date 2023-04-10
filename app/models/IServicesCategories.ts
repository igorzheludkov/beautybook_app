type Item = {
  id: string
  title: string
  description: string
  image: string
  parent?: string
}

type SubCategory = {
  parent?: string
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
  subCategories?: SubCategory[] | []
}
