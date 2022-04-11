import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Cart Context
import { cartContext } from "./CartContextProvider";

// Components
import CartItem from "./CartItem";

// Styles
import styles from "./Cart.module.css";

const Cart = () => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
      </div>
      {state.totalCount > 0 && (
        <div className={styles.payments}>
          <p>
            <span>TOTAL ITEMS :</span> {state.totalCount}{" "}
          </p>
          <p>
            <span>TOTAL Price :</span> {state.totalPrice} $
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              CHECKOUT
            </button>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              CLEAR CART
            </button>
          </div>
        </div>
      )}

      {state.totalCount === 0 && !state.checkOut && (
        <div className={styles.complete}>
          <h3>Want to buy?</h3>
          <Link to="/products">Go to shop</Link>
        </div>
      )}

      {state.checkOut && (
        <div className={styles.complete}>
          <h3>Checked out successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
