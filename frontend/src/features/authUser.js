import { createSlice } from '@reduxjs/toolkit'
// initial state
const initialState = {
    token: null,
    status: 'void',
    isLogged: false,
  }
//slice for authorization 
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      state.isLogged = true
      state.status = 'authorized user'
    },
    clearToken: (state) => {
      state.token = null
      state.isLogged = false
      state.status = "not authorized user"
    }
  }
})

export const { setToken, clearToken } = authSlice.actions
export default authSlice.reducer