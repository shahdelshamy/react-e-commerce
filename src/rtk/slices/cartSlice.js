
import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'cartSlice';

//createSlice -> return object with reducers and actions
const cartSlice = createSlice({
    name: sliceName ,  
    initialState: [],
    reducers: {
        addToCart(state,action){
            const product = state.find(item => item.id === action.payload.id);
            if(product){
                product.quantity += 1;
            } else {
                state.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart(state,action){
            return state.filter(item => item.id !== action.payload.id);
        },

        increaseQuantity(state,action){
            const product = state.find(item => item.id === action.payload.id);
            if(product){
                product.quantity += 1;
            }
        },

        decreaseQuantity(state,action){
            const product = state.find(item => item.id === action.payload.id);
            if(product && product.quantity > 1){
                product.quantity -= 1;
            }
        },
        clearCart(state,action){
            return [];
        }
    }
});

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;


//addToCart({ id: 1, name: "Laptop" }
// {
//   type: "cartSlice/addToCart",
//   payload: { id: 1, name: "Laptop" }
// }     

//    ---> type : addToCart --> go to reducers --> addToCart(state,action)