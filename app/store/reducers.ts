import authSlice from './modules/auth/slice';
import {firestoreApi} from './modules/api/userData/userDataSlice';

export default {
  authSlice,
  [firestoreApi.reducerPath]: firestoreApi.reducer,
};
