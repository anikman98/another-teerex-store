import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import '../css/Catalog.css';

const Catalog = () => {
  const { products, fetchData } = useContext(ProductContext);

  useEffect(() => {
    fetchData();
  }, []);
  return <div className="catalog">
    {
        products ? (
            products.map((item) => {
                return <ProductCard product={item} key={item.id} />
            })
        ):(
            "Loading"
        )
    }
  </div>;
};

export default Catalog;
