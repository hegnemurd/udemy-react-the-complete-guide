import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { cartItemsActions } from "../../store/cart-items";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const removeHandler = (event) => {
    event.preventDefault();

    dispatch(cartItemsActions.removeItem(3));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
