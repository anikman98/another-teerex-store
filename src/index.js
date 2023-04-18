import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";
import FilterProvider from "./context/FilterContext";
import SearchProvider from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <FilterProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </FilterProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
