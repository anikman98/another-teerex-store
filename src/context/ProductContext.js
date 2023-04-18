import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

    const fetchData = () => {
        fetch(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        ).then(response => response.json())
        .then(response => setProducts(response));
    }

  return (
    <ProductContext.Provider value={{ products, setProducts, fetchData }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;