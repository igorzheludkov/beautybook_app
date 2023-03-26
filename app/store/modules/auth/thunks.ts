import {createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import userDataApi from '../api/userData/userDataSlice';

interface IUserCredential {
  email: string;
  password: string;
}

export const signUp = createAsyncThunk(
  'auth/register',
  async (userCredentials: IUserCredential) => {
    const {email, password} = userCredentials;
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  },
);
export const login = createAsyncThunk(
  'auth/login',
  async (userCredentials: IUserCredential) => {
    const {email, password} = userCredentials;
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_,{dispatch}) => {
  try {
    await auth().signOut();
    dispatch(userDataApi.util.resetApiState())
  } catch (error) {
    throw error;
  }
});
