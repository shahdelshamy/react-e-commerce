
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const sliceName = 'productsSlice';

export const fetchProducts = createAsyncThunk(
    `${sliceName}/fetchProducts`,
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }
);

//createSlice -> return object with reducers and actions
const productSlice = createSlice({
    name: sliceName,
    initialState: [],
    reducers: {
        // addProduct, removeProduct
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        });
    },   

})

export const productsReducer = productSlice.reducer;