import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Functions
import { shorten, isInCart, quantityCount } from "../services/functions";

// Cart Context
import { cartContext } from "./CartContextProvider";

// Styles
import styles from "./Product.module.css";

import trashIcon from "../icons/trash.svg";

const Product = (props) => {
  const { state, dispatch } = useContext(cartContext);
  const { id, title, price, image } = props.data;
  return (
    <div className={styles.container}>
      <img
        src={image}
        alt="product"
        style={{ width: "200px", height: "200px" }}
      />
      <h3>{shorten(title)}</h3>
      <p>{price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${id}`}>product details</Link>
        <div className={styles.buttonContainer}>
          {isInCart(state, id) ? (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: props.data })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: props.data })
              }
            >
              ADD TO CART
            </button>
          )}
          {quantityCount(state, id) > 0 && (
            <span className={styles.counter}>{quantityCount(state, id)}</span>
          )}
          {quantityCount(state, id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            >
              <img src={trashIcon} alt="trash" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
