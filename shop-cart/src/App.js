import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Navigate replace to="/products" />} />
        <Route path="/*" element={<Navigate replace to="/products" />} />
      </Routes>
    </>
  );
}

export default App;
