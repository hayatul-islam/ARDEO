import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
  },
});
