import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loginUser: localStorage.getItem("loginUser"),
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogin = true;
      state.loginUser = true;
      localStorage.setItem("loginUser", true);
    },
    logOut: (state) => {
      state.isLogin = false;
      state.loginUser = false;
      localStorage.setItem("loginUser", false);
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
