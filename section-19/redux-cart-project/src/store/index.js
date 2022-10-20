import { configureStore } from "@reduxjs/toolkit";

import cartButtonReducer from "./cart-button";
import cartItemsReducer from "./cart-items";

const store = configureStore({
  reducer: { cartButton: cartButtonReducer, cartItems: cartItemsReducer },
});

export default store;
