import { configureStore } from "@reduxjs/toolkit";

import cartButtonSlice from "./cart-button";
import cartItemsSlice from "./cart-items";

const store = configureStore({
  reducer: { cartButton: cartButtonSlice.reducer, cartItems: cartItemsSlice.reducer },
});

export default store;
