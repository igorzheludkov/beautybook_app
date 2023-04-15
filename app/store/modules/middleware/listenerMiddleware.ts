import { createListenerMiddleware } from '@reduxjs/toolkit'
import bookmarksApi from '../api/bookmarks/bookmarksSlice'

const listenerMiddleware = createListenerMiddleware()

// update bookmarks screen after relogin
listenerMiddleware.startListening({
  type: 'authLogin/fulfilled',
  effect: (action, listenerApi) => {
    listenerApi.dispatch(bookmarksApi.util.invalidateTags(['bookmarksList']))
  }
})


export default listenerMiddleware
