import { createSlice } from "@reduxjs/toolkit";
import { LIVE_COUNT } from "./Constants";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    chatMessage: (state, action) => {
      state.messages.splice(LIVE_COUNT, 2);
      state.messages.unshift(action.payload);
    },
  },
});
export const { chatMessage } = chatSlice.actions;
export default chatSlice.reducer;
