import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../../assets/Firebase/Firebase';

export const addToCart = createAsyncThunk('addToCart', async ({ id, size, qty = 1 }) => {



    try {
        const email = localStorage.getItem('email');
        const emailDoc = doc(db, 'cart', email);
        const emailSnap = await getDoc(emailDoc);



        let data = emailSnap.data()
        //new doc
        if (!(data?.[id])) {
            data = {
                ...data,

                [id]: {
                    [size]: {
                        qty: qty
                    }
                }

            }
           
         await setDoc(emailDoc, data)

        } else {
            //update size / add new size
            data[id][size] = {
                qty: qty
            }
            await updateDoc(emailDoc, data)


        }

        const newarr = [];
        Object.keys(data).map(id =>
            Object.keys(data[id]).map(size => {
                const prd = {
                    id: id,
                    qty: data[id][size].qty,
                    size: size
                }
                newarr.push(prd)
            }

            )
        )

        return newarr;

    } catch (err) {
        console.error('add to cart', 'firebase', err);
    }



})
export const removeFromCart = createAsyncThunk('removeFromCart', async ({ id, size }) => {



    try {
        const email = localStorage.getItem('email');
        const emailDoc = doc(db, 'cart', email);
        const emailSnap = await getDoc(emailDoc);
        let data = emailSnap.data()
        //remove size from cart

        delete data[id][size];
        await updateDoc(emailDoc, data)

        const newarr = [];
        Object.keys(data).map(id =>
            Object.keys(data[id]).map(size => {
                const prd = {
                    id: id,
                    qty: data[id][size].qty,
                    size: size
                }
                newarr.push(prd)
            }

            )
        )
        return newarr;



    } catch (error) {
        console.error('remove from cart', 'firebase', err);
    }



})

export const getFromCart = createAsyncThunk('getFromCart', async () => {



    try {
        const email = localStorage.getItem('email');
        const emailDoc = doc(db, 'cart', email);
        const emailSnap = await getDoc(emailDoc);
        let data = emailSnap.data()

        const newarr = [];
        Object.keys(data).map(id =>
            Object.keys(data[id]).map(size => {
                const prd = {
                    id: id,
                    qty: data[id][size].qty,
                    size: size
                }
                newarr.push(prd)
            }

            )
        )
        return newarr;



    } catch (error) {
        console.error('get from cart', 'firebase', err);
    }



})

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: { cart: [], isLoading: false, },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                const data = action.payload;
                state.cart = data;
                state.isLoading = false;
                console.log('firebase request', 'arr to cart')

            })
            .addCase(addToCart.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                const data = action.payload;
                state.cart = data;
                state.isLoading = false;
                console.log('firebase request', 'remove cart item')
            })
            .addCase(removeFromCart.pending, (state) => {
                state.isLoading = true
            })
            .addCase(removeFromCart.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getFromCart.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getFromCart.fulfilled, (state, action) => {
                const data = action.payload;
                state.cart = data;
                state.isLoading = false;
                console.log('firebase request', 'get cart items')
            })
            .addCase(getFromCart.rejected, (state) => {
                state.isLoading = false;
            })

    }


})



export default cartSlice.reducer
