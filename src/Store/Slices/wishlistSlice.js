import { createSlice } from "@reduxjs/toolkit";
import { addProductToFirebase, removeProductFromFirebase } from "../../Pages/WishList/firebasewishList";


const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] , isLoading: true,},
  reducers: {

      //اضافة 
    addToWishList: (state, action) => {
     
      const isProductAlreadyAdded = state.favorites.find(item => item === action.payload);
    
      if (isProductAlreadyAdded) {
        state.favorites = state.favorites.filter(x => x != action.payload); //remove prd from local state
        removeProductFromFirebase(action.payload) //remove prd from firebase
      }
      else{
        state.favorites.push(action.payload); //add prd to local state
        addProductToFirebase(action.payload); //add prd to firebase
      }
    },


    //تحميل prd من firebase
    getWishListFirestore: (state, action) => {
      console.log('firebase request', 'get wishlist')
      state.favorites = action.payload;
      state.isLoading = false;
    }



  },



});

export const { addToWishList, getWishListFirestore } = favoriteSlice.actions;
export default favoriteSlice.reducer;
