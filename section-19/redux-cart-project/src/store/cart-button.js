import { createSlice } from "@reduxjs/toolkit";

const cartButtonSlice = createSlice({
  name: "show",
  initialState: { showCart: false },
  reducers: {
    clickedCartButton(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartButtonActions = cartButtonSlice.actions;

export default cartButtonSlice;
