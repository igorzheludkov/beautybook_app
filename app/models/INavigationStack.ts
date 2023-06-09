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
  MasterScreen: { masterId?: string }
  MasterServScreen: { masterId?: string }
  ServiceInfoScreen:  { item: IUserServiceDocument } | undefined
  MasterPhotoGalleryScreen: { masterId?: string }
  MasterFeedbackScreen: { masterId?: string }
  MasterExperienceScreen: { masterId?: string }
}

export interface FavoritesStackTypes extends ParamListBase {
  FavoritesScreen: undefined
  MasterScreen: { masterId?: string }
}

export interface ProfileStackTypes extends ParamListBase {
  AdminPanelScreen: undefined
  AuthScreen: undefined
  PhotoGalleryScreen: undefined
  FeedbackScreen: undefined
  ExperienceScreen: undefined
  ProfileScreen: undefined
  GoodsScreen: undefined
  ServicesScreen: { masterId?: string }
  ServiceAddScreen: { item: IUserServiceDocument } | undefined
  MasterScreen: { masterId?: string }
}
