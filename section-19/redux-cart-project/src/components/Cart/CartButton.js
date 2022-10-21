import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart-button";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cartItems.totalQuantity);

  const showCartHandler = () => {
    dispatch(cartActions.clickedCartButton());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
