import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../features/authStore'
import UserReducer from '../features/userStore'

export default configureStore({
    reducer: {
        authenticate:AuthReducer,
        userReducer:UserReducer
    }
})