import React, { createContext, useEffect, useState } from "react";

// Fetching Products From Api Function
import { getProducts } from "../services/api";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(!products.length) {
      try {
        const fetchData = async () => {
          setProducts(await getProducts());
        };
        fetchData();
      } catch (error) {
        console.log("error :", error);
      }
    }
  }, []);

  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
