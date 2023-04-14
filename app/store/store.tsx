import { configureStore } from '@reduxjs/toolkit'
import Reactotron from '../../ReactotronConfig'
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import reducer from './reducers'
import apiSlice from './modules/api/apiSlice'
import userSliceApi from './modules/user/userSlice'
import { authSlice } from './modules/auth/slice'
import listenerMiddleware from './modules/middleware/listenerMiddleware'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [apiSlice.reducerPath, userSliceApi.reducerPath]
  // whitelist: ['apiSlice.authSlice', 'apiSlice.userDataApi']
}

const persistedReducer = persistCombineReducers(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  enhancers: [Reactotron.createEnhancer!()],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'authLogin/fulfilled',
          'authSignUp/fulfilled',
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ],
        ignoredPaths: ['authSlice.user']
      }
    })
    .prepend(listenerMiddleware.middleware)
    .concat(apiSlice.middleware)
    .concat(userSliceApi.middleware)
})

const persistor = persistStore(store)

export { store, persistor }

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
