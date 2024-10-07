import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],  // Initialized as an empty array instead of null
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {  // Optionally, add a method to push new messages
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {  // Optionally, a method to clear messages
      state.messages = [];
    }
  }
});

export const { setMessages, addMessage, clearMessages } = messageSlice.actions;
export default messageSlice.reducer;
