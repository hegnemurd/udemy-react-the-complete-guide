import { createSlice } from "@reduxjs/toolkit";

const initialCartItemsState = { showCart: false };

const cartItemsSlice = createSlice({
  name: "add",
  initialState: initialCartItemsState,
  reducers: {
    addToCart(state) {
      state.showCart = false;
    },
  },
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
