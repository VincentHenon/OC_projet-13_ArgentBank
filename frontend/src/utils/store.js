import profileReducer  from '../features/userProfile'
import authReducer  from '../features/authUser'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
})

export default store