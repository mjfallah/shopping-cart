import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Cart Context
import { cartContext } from "./CartContextProvider";

// Styles
import styles from "./Navbar.module.css";

import cartIcon from "../icons/shop.svg";

const Navbar = () => {
  const { state } = useContext(cartContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img
              src={cartIcon}
              alt="cart"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
          <span>{state.totalCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
