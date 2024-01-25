import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookies";
const initialState = {
  token: Cookies.getItem("token") || null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state, action) => {
      state.token = action.payload;
      Cookies.removeItem("token");
    },
  },
});

export const { setToken } = tokenSlice.actions;

export const storeToken = (token) => (dispatch) => {
  Cookies.setItem("token", token);
  dispatch(setToken(token));
};

export const deleteToken = (token) => (dispatch) => {
  Cookies.removeItem("token");
  dispatch(setToken(token));
};
