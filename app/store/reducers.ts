import { apiSlice } from './modules/api/apiSlice'
import { userSliceApi } from './modules/user/userSlice'
import authSlice from './modules/auth/slice'
import appSlice from './modules/app/slice'

export default {
  [apiSlice.reducerPath]: apiSlice.reducer,
  [userSliceApi.reducerPath]: userSliceApi.reducer,
  authSlice,
  appSlice
}
