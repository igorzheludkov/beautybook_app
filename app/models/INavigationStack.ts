import { ParamListBase } from '@react-navigation/native'
import { IFilters } from '../screens/CatalogStack/CategoryScreen/types'

export type MainBottomTabs = {
  CatalogStack: undefined
  FavoritesStack: undefined
  ProfileStack: undefined
}

export interface CatalogStackTypes extends ParamListBase {
  StartScreen: undefined
  CategoryScreen: IFilters
  MasterScreen: { id: string }
}

export interface FavoritesStackTypes extends ParamListBase {
  FavoritesScreen: undefined
  MasterScreen: { id: string }
}

export interface ProfileStackTypes extends ParamListBase {
  AdminPanelScreen: undefined
  AuthScreen: undefined
  PhotoGalleryScreen: undefined
  ProfileScreen: undefined
}
