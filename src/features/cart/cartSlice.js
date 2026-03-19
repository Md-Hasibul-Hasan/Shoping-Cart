import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: "featureCart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const ifExists = state.find((item) => item.id === action.payload.id); 

            if (ifExists){
                ifExists.quantity++;
            }
            else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },

        clearCart: ()=>{
            return []
        },

        removeFromCart: (state, action)=> {
            return state.filter((item) => item.id !== action.payload.id);
        },

        updateQuantity: (state, action) => {
            const { id, Quan } = action.payload;
            const product = state.find((item) => item.id === id);
            if (product) {
                product.quantity = Quan;
            }
        }
    }
})

export const { addToCart, clearCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer