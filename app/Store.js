import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../features/authStore'
import UserReducer from '../features/userStore'
import LayoutReducer from '../features/layoutStore'
export default configureStore({
    reducer: {
        authenticate:AuthReducer,
        userReducer:UserReducer,
        layoutReducer:LayoutReducer
    }
})