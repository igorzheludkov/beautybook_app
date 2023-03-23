import {configureStore} from '@reduxjs/toolkit';
import Reactotron from '../../ReactotronConfig';
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './reducers';
import {userDataApi} from './modules/api/userData/userDataSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authSlice'],
};

const persistedReducer = persistCombineReducers(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  enhancers: [Reactotron.createEnhancer!()],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'auth/login/fulfilled',
          'auth/signUp/fulfilled',
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
        ignoredPaths: ['authSlice.user'],
      },
    }).concat(userDataApi.middleware),
});

const persistor = persistStore(store);

export {store, persistor};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
