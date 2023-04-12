import { ParamListBase } from '@react-navigation/native'
import { IFilters } from '../screens/CatalogStack/CategoryScreen/types'
import { IUserServiceDocument } from '../store/modules/api/goodsAndServices/types'

export type MainBottomTabs = {
  CatalogStack: undefined
  FavoritesStack: undefined
  ProfileStack: undefined
}

export interface CatalogStackTypes extends ParamListBase {
  StartScreen: undefined
  CategoryScreen: IFilters
  MasterScreen: { masterId: string; bookmarkId?: string }
}

export interface FavoritesStackTypes extends ParamListBase {
  FavoritesScreen: undefined
  MasterScreen: { masterId: string; bookmarkId?: string }
}

export interface ProfileStackTypes extends ParamListBase {
  AdminPanelScreen: undefined
  AuthScreen: undefined
  PhotoGalleryScreen: undefined
  ProfileScreen: undefined
  GoodsScreen: undefined
  ServicesScreen: undefined
  ServiceAddScreen: { item: IUserServiceDocument } | undefined
}
