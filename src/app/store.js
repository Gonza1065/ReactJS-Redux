import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../features/products/productsSlice";
import { tokenSlice } from "../features/token/tokenSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    token: tokenSlice.reducer,
  },
});
