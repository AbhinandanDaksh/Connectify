import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: null,
  otherUsers: null,
  selectedUser: null,
  onlineUsers: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    // Optional reset for when the user logs out
    resetUserState: () => initialState,
  },
});

export const { setAuthUser, setOtherUsers, setSelectedUser, setOnlineUsers, resetUserState } = userSlice.actions;
export default userSlice.reducer;
