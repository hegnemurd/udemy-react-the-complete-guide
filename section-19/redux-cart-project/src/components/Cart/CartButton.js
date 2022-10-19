import { useDispatch } from "react-redux";

import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cartButton";

const CartButton = () => {
  const dispatch = useDispatch();

  const clickHandler = (event) => {
    event.preventDefault();

    dispatch(cartActions.clickedCartButton());
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
