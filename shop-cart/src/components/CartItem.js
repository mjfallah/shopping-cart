import React, { useContext } from "react";

// Functions
import { shorten } from "../services/functions";

// Cart Context
import { cartContext } from "./CartContextProvider";

// Styles
import styles from "./CartItem.module.css";

import trashIcon from "../icons/trash.svg";

const CartItem = (props) => {
  const { dispatch } = useContext(cartContext);
  const { title, price, image, quantity } = props.data;

  return (
    <div className={styles.container}>
      <img src={image} alt="product" className={styles.productImage} />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>

        {quantity > 1 && (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        )}

        {quantity === 1 && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img
              src={trashIcon}
              alt="trash"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
