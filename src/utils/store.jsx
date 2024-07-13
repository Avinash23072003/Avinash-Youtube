import { configureStore } from "@reduxjs/toolkit";
import NavBarSlice from "./NavbarSlice";

const store = configureStore({
  reducer: {
    app: NavBarSlice,
  },
});
export default store;
