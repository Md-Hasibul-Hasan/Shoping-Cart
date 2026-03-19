import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart/cartSlice";

export const mystore = configureStore({
  reducer: {
    cartStore: cartSlice.reducer,
  },
});