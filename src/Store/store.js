import { configureStore } from "@reduxjs/toolkit";
import  allProductsReducr  from "./Slices/allProducts";
import favoritesReducer from "./Slices/wishlistSlice";
import cartReducer from "./Slices/cartSlice";
import  settingReducer  from './Slices/settingSlice';

const store = configureStore(
    {
        reducer:{
            allProducts : allProductsReducr ,
            favorites: favoritesReducer,
            cart:cartReducer,
            setting:settingReducer
        }
    }
)


export default store


