import { createSlice } from "@reduxjs/toolkit";
const BurgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState: {
    open: false,
  },
  reducers: {
    handleOpen: (state) => {
      state.open = !state.open;
    },
    closeMenu: (state) => {
      state.open = false;
    },
  },
});
export const { handleOpen, closeMenu } = BurgerMenuSlice.actions;
export default BurgerMenuSlice.reducer;
