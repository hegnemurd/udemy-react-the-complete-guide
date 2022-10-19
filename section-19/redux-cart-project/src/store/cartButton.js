import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false };

const cartSlice = createSlice({
  name: "show",
  initialState: initialCartState,
  reducers: {
    clickedCartButton(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
