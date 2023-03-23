import authSlice from './modules/auth/slice';
import {userDataApi} from './modules/api/userData/userDataSlice';

export default {
  authSlice,
  [userDataApi.reducerPath]: userDataApi.reducer,
};
