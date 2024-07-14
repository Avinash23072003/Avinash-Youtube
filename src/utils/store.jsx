import { configureStore } from "@reduxjs/toolkit";
import NavBarSlice from "./NavbarSlice";
import chatMessages from "../utils/chatSlice";

const store = configureStore({
  reducer: {
    app: NavBarSlice,
    chat: chatMessages,
  },
});
export default store;
