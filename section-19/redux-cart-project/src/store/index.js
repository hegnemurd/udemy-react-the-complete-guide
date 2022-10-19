import { configureStore } from "@reduxjs/toolkit";

import cartButtonReducer from "./cartButton";

const store = configureStore({
  reducer: { cartButton: cartButtonReducer },
});

export default store;
