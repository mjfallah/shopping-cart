import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

// Product Context And Cart Context
import { productContext } from "./ProductContextProvider";
import { cartContext } from "./CartContextProvider";

// Functions
import { isInCart, quantityCount } from "../services/functions";

// Components
import Spinner from "./Spinner";

// Styles
import styles from "./ProductDetails.module.css";

// Icons
import trashIcon from "../icons/trash.svg";

const ProductDetails = () => {
  const { state, dispatch } = useContext(cartContext);

  const products = useContext(productContext);
  const params = useParams();
  const id = params.id;
  const product = products[id - 1];

  return (
    <div className={styles.container}>
      {product ? (
        <div>
          <img className={styles.image} src={product.image} alt="product" />
          <div className={styles.textContainer}>
            <h3>{product.title}</h3>
            <p className={styles.category}>
              <span>Category : </span> {product.category}
            </p>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>{product.price} $</p>
            <div className={styles.buttonContainer}>
              <Link to="/products">back to shop</Link>
              <div>
                {isInCart(state, product.id) ? (
                  <button
                    className={styles.smallButton}
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: product })
                    }
                  >
                    +
                  </button>
                ) : (
                  <button
                    className={styles.bigButton}
                    onClick={() =>
                      dispatch({ type: "ADD_ITEM", payload: product })
                    }
                  >
                    ADD TO CART
                  </button>
                )}
                {quantityCount(state, product.id) > 0 && (
                  <span className={styles.counter}>
                    {quantityCount(state, product.id)}
                  </span>
                )}
                {quantityCount(state, product.id) > 1 && (
                  <button
                    className={styles.smallButton}
                    onClick={() =>
                      dispatch({ type: "DECREASE", payload: product })
                    }
                  >
                    -
                  </button>
                )}
                {quantityCount(state, product.id) === 1 && (
                  <button
                    className={styles.smallButton}
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: product })
                    }
                  >
                    <img src={trashIcon} alt="trash" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
