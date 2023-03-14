import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loginUser: localStorage.getItem("loginUser"),
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
