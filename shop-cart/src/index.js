import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

// Context Components
import ProductContextProvider from './components/ProductContextProvider';
import CartContextProvider from './components/CartContextProvider';


import App from './App';

// Styles
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
