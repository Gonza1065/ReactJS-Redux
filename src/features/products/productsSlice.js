import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProduct: (state, action) => {},
    deleteProduct: (state, action) => {},
  },
});

export const { getProducts } = productsSlice.actions;
