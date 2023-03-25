import authSlice from './modules/auth/slice'
import { apiSlice } from './modules/api/apiSlice'


export default {
  authSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
}
