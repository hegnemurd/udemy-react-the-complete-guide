import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { cartButtonActions } from "../../store/cart-button";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const showCartHandler = () => {
    dispatch(cartButtonActions.clickedCartButton());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
