import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {login, logout, signUp} from './thunks';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface AuthState {
  user: FirebaseAuthTypes.User | null;
  isNewUser: boolean;
  isAuthorized: boolean;
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isSigningUp: boolean;
  error: any;
}

const initialState: AuthState = {
  user: null,
  isNewUser: true,
  isAuthorized: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isSigningUp: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: state => {
      state.isAuthorized = true;
    },
    setLogout: state => {
      state.isAuthorized = false;
    },
    isNewUser: (state, action: PayloadAction<boolean>) => {
      state.isNewUser = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // login actions
      .addCase(login.pending, state => {
        state.isLoggingIn = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggingIn = false;
        state.isAuthorized = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggingIn = false;
        state.isAuthorized = false;
        state.error = action.error.code;
      })
      // logout actions
      .addCase(logout.pending, state => {
        state.isLoggingOut = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.isLoggingOut = false;
        state.isAuthorized = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoggingOut = false;
        state.isAuthorized = false;
        state.error = action.error.code;
      })
      // signUp actions
      .addCase(signUp.pending, state => {
        state.isSigningUp = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSigningUp = false;
        state.isAuthorized = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isSigningUp = false;
        state.isAuthorized = false;
        state.error = action.error.code;
      });
  },
});

// Action creators are generated for each case reducer function
export const {actions} = authSlice;

export default authSlice.reducer;
