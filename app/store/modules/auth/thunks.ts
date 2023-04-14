import { createAsyncThunk } from '@reduxjs/toolkit'
import auth from '@react-native-firebase/auth'
import userSliceApi from '../user/userSlice'

interface IUserCredential {
  email: string
  password: string
}

export const signUp = createAsyncThunk('authSignUp', async (userCredentials: IUserCredential) => {
  const { email, password } = userCredentials
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password)
    return userCredential.user
  } catch (error) {
    throw error
  }
})
export const login = createAsyncThunk('authLogin', async (userCredentials: IUserCredential) => {
  const { email, password } = userCredentials
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password)
    return userCredential.user
  } catch (error) {
    throw error
  }
})

export const logout = createAsyncThunk('authLogout', async (_, { dispatch }) => {
  try {
    await auth().signOut()
    dispatch(userSliceApi.util.resetApiState())
  } catch (error) {
    throw error
  }
})
