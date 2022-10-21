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

export const cartActions = cartButtonSlice.actions;

export default cartButtonSlice;
