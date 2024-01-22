import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserProfile } from '../services/serviceAPI'

// initial state
const initialState = {
  data: '',
  status: 'void',
  error: null,
}

// slice for userProfile 
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    fetching: (state) => {
      state.status = 'pending'
    },
    resolved: (state, action) => {
      state.data = action.payload
      state.status = 'resolved'
    },
    rejected: (state, action) => {
      state.error = action.payload
      state.status = 'rejected'
    },
    updateProfile: (state, action) => {
      state.data.firstName = action.payload.firstName
      state.data.lastName = action.payload.lastName
    },
    clearProfile: (state,action) => {
      state.data= ''
      state.status= 'void'
      state.error= null
    } 
  },
})

// async thunk
export const fetchOrUpdateUserProfile = createAsyncThunk(
    'userProfile/fetchOrUpdateUserProfile',
    async (token, { dispatch, getState }) => {
      const status = getState().profile.status
      if (status === 'pending' || status === 'resolved') {
        return
      }
      dispatch(fetching())

      try {
        const response = await getUserProfile(token) 
        dispatch(resolved(response))
      } catch (error) {
        dispatch(rejected(error.message))
      }
    }
  )

export const { fetching, resolved, rejected, updateProfile, clearProfile } = userProfileSlice.actions
export default userProfileSlice.reducer
