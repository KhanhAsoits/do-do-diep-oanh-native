import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../features/authStore'
import UserReducer from '../features/userStore'
import LayoutReducer from '../features/layoutStore'
import categoriesStore from "../features/categoriesStore";
import productStore from "../features/productStore";
export default configureStore({
    reducer: {
        categoriesReducer:categoriesStore,
        authenticate:AuthReducer,
        userReducer:UserReducer,
        layoutReducer:LayoutReducer,
        productReducer:productStore
    }
})
