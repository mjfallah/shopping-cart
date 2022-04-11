import React, { useContext } from "react";

// Product Context
import { productContext } from "./ProductContextProvider";

// Components
import Product from "./Product";
import Spinner from "./Spinner";

// Styles
import styles from "./Store.module.css";

const Store = () => {
  const products = useContext(productContext);

  return (
    <div className={styles.mainContainer}>
      {products.length ? (
        <div className={styles.container}>
          {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      ) : (
        <div className={styles.waitingAlert}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Store;
