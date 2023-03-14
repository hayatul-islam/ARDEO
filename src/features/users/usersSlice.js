import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./usersApi";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const users = await getUsers();
  return users;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.users = [];
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default usersSlice.reducer;
