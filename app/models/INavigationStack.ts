import { ParamListBase } from '@react-navigation/native'

export type MainBottomTabs = {
  CatalogStack: undefined
  FavoritesStack: undefined
  ProfileStack: undefined
}

export interface CatalogStackTypes extends ParamListBase {
  StartScreen: undefined
  CategoryScreen: { root?: string | undefined; sub_1?: string | undefined }
  MasterScreen: { id: string }
}
export interface ProfileStackTypes extends ParamListBase {
  AdminPanelScreen: undefined
  AuthScreen: undefined
  PhotoGalleryScreen: undefined
  ProfileScreen: undefined
}
