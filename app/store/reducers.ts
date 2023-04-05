import { apiSlice } from './modules/api/apiSlice'
import authSlice from './modules/auth/slice'
import appSlice from './modules/app/slice'

export default {
  [apiSlice.reducerPath]: apiSlice.reducer,
  authSlice,
  appSlice
}
