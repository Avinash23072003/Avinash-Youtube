import { createSlice } from "@reduxjs/toolkit";

const NavBarSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = NavBarSlice.actions;
export default NavBarSlice.reducer;
