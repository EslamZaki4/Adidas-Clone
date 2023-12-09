import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';

export const getSetting = createAsyncThunk('getSetting', async () => {

    try {

        const setting = await getDocs(collection(db, 'setting'))
        const mydata = [];
        setting.docs.forEach(doc => {
            mydata.push({...doc.data() , id: doc.id })
        });

        return mydata;

    } catch (err) {
        console.error('err', err);
    }


})







const setting = createSlice({
    name: 'setting',
    initialState: { loader: {} , navcolor : '' , cover : {}},
    extraReducers: (builder) => {
        builder
            .addCase(getSetting.fulfilled, (state, action) => {
                const loader = action.payload.filter(doc => doc.id == 'apperance')[0].loader    
                const navcolor = action.payload.filter(doc => doc.id == 'apperance')[0].navcolor    
                const cover = action.payload.filter(doc => doc.id == 'apperance')[0].cover    
                console.log('firebase request', 'get setting')
                 state.setting = action.payload;
                 state.loader = loader;
                 state.navcolor = navcolor;
                 state.cover = cover;
              



            })



    }


})



export default setting.reducer
