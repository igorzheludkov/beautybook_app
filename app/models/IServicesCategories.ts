type SubCategory = {
  parent?: string
  id: string
  title: string
  description: string
  image: string
  subCategories: SubCategory[] | []
}

export interface IServicesCategories {
  id: string
  title: string
  description: string
  image: string
  subCategories?: SubCategory[] | []
}
