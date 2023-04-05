import { createSlice } from '@reduxjs/toolkit'
import { CitiesDataTypes } from '../../../models/ICities'

export interface AppState {
  city: CitiesDataTypes | undefined
}

const initialState: AppState = {
  city: undefined
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCityReducer: (state, action) => {
      state.city = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCityReducer } = appSlice.actions

export default appSlice.reducer
