import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "./usersApi";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchUser = createAsyncThunk("users/fetchUser", async (id) => {
  const users = await getUser(id);
  return users;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.users = {};
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default userSlice.reducer;
