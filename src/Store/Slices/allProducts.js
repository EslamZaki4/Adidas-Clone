import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';

export const GETallProducts = createAsyncThunk('GETallProducts', async () => {

    try {

        const prdArr = [], prdAlternative = [], productsKeys = [];


    
        var productDB = await getDocs(
            query(
                collection(db, 'products'),
                where('gender', '==', 'الرجال'),
                where('category', '==', 'أحذية'),
            )
        );
        console.log('response 1', productDB)
        productDB.docs.forEach(doc => {
            const prd = { ...doc.data(), id: doc.id, };
            const prdKey = prd.name + prd.gender + prd.category;
            if (!productsKeys.includes(prdKey)) {
                productsKeys.push(prdKey);
                prdArr.push(prd);
            } else {
                prdAlternative.push(prd);
            }
        }

        )



        // var productDB = await getDocs(
        //     query(
        //         collection(db, 'products'),
        //         where('gender', '==', 'الرجال'),
        //         where('category', '==', 'تي شيرت'),
        //     )
        // );
        // console.log('response 2', productDB)
        // productDB.docs.forEach(doc => {
        //     const prd = { ...doc.data(), id: doc.id, };
        //     const prdKey = prd.name + prd.gender + prd.category;
        //     if (!productsKeys.includes(prdKey)) {
        //         productsKeys.push(prdKey);
        //         prdArr.push(prd);
        //     } else {
        //         prdAlternative.push(prd);
        //     }
        // }

        // )
     


        // var productDB = await getDocs(
        //     query(
        //         collection(db, 'products'),
        //         where('gender', '==', 'الرجال'),
        //         where('category', '==', 'شورت'),
        //     )
        // );
        // console.log('response 3', productDB)
        // productDB.docs.forEach(doc => {
        //     const prd = { ...doc.data(), id: doc.id, };
        //     const prdKey = prd.name + prd.gender + prd.category;
        //     if (!productsKeys.includes(prdKey)) {
        //         productsKeys.push(prdKey);
        //         prdArr.push(prd);
        //     } else {
        //         prdAlternative.push(prd);
        //     }
        // }

        // )




        // var productDB = await getDocs(
        //     query(
        //         collection(db, 'products'),
        //         where('gender', '==', 'الرجال'),
        //         where('category', '==', 'هودي'),
        //     )
        // );
        // console.log('response 4', productDB)
        // productDB.docs.forEach(doc => {
        //     const prd = { ...doc.data(), id: doc.id, };
        //     const prdKey = prd.name + prd.gender + prd.category;
        //     if (!productsKeys.includes(prdKey)) {
        //         productsKeys.push(prdKey);
        //         prdArr.push(prd);
        //     } else {
        //         prdAlternative.push(prd);
        //     }
        // }

        // )
       
   


        // var productDB = await getDocs(
        //     query(
        //         collection(db, 'products'),
        //         where('gender', '==', 'النساء'),
        //         where('category', '==', 'أحذية'),
        //     )
        // );
        // console.log('response 5', productDB)
        // productDB.docs.forEach(doc => {
        //     const prd = { ...doc.data(), id: doc.id, };
        //     const prdKey = prd.name + prd.gender + prd.category;
        //     if (!productsKeys.includes(prdKey)) {
        //         productsKeys.push(prdKey);
        //         prdArr.push(prd);
        //     } else {
        //         prdAlternative.push(prd);
        //     }
        // }

        // )
       
   

        // var productDB = await getDocs(
        //     query(
        //         collection(db, 'products'),
        //         where('gender', '==', 'النساء'),
        //         where('category', '==', 'تي شيرت'),
        //     )
        // );

        // console.log('response 6', productDB)


        // productDB.docs.forEach(doc => {
        //     const prd = { ...doc.data(), id: doc.id, };
        //     const prdKey = prd.name + prd.gender + prd.category;
        //     if (!productsKeys.includes(prdKey)) {
        //         productsKeys.push(prdKey);
        //         prdArr.push(prd);
        //     } else {
        //         prdAlternative.push(prd);
        //     }
        // }

        // )
       
   





        var productDB = await getDocs(
            query(
                collection(db, 'products'),
                where('gender', '==', 'النساء'),
                where('category', '==', 'بنطال'),
            )
        );

        console.log('response 7', productDB)

        
        productDB.docs.forEach(doc => {
            const prd = { ...doc.data(), id: doc.id, };
            const prdKey = prd.name + prd.gender + prd.category;
            if (!productsKeys.includes(prdKey)) {
                productsKeys.push(prdKey);
                prdArr.push(prd);
            } else {
                prdAlternative.push(prd);
            }
        }

        )
       


        var productDB = await getDocs(
            query(
                collection(db, 'products'),
                where('gender', '==', 'النساء'),
                where('category', '==', 'جاكيت'),
            )
        );

        console.log('response 8', productDB)

        
        productDB.docs.forEach(doc => {
            const prd = { ...doc.data(), id: doc.id, };
            const prdKey = prd.name + prd.gender + prd.category;
            if (!productsKeys.includes(prdKey)) {
                productsKeys.push(prdKey);
                prdArr.push(prd);
            } else {
                prdAlternative.push(prd);
            }
        }

        )


        return { filterProducts: prdArr, alternative: prdAlternative };



    } catch (err) {
        console.error('err', err);
    }


})













const allProducts = createSlice({
    name: 'allProducts',
    initialState: { allProducts: [], alternative: [], isLoading: false, },
    extraReducers: (builder) => {
        builder
            .addCase(GETallProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GETallProducts.fulfilled, (state, action) => {
                state.allProducts = action.payload['filterProducts'];
                state.alternative = action.payload['alternative'];
                state.isLoading = false;
                console.log('firebase request', 'getallprd')

            })
            .addCase(GETallProducts.rejected, (state) => {
                state.isLoading = false;
            });



    }


})



export default allProducts.reducer
