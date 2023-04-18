import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import "../css/Catalog.css";
import { FilterContext } from "../context/FilterContext";
import { SearchContext } from "../context/SearchContext";

const Catalog = () => {
  const { products, fetchData } = useContext(ProductContext);
  const { colorFilter, genderFilter, typeFilter, priceFilter } =
    useContext(FilterContext);
  const { searchQuery } = useContext(SearchContext);
  const filterTypes = ["color", "type", "gender", "name"];

  useEffect(() => {
    fetchData();
  }, []);

  /*
    A single product details looks like this

    color:"Black"
    currency:"INR"
    gender: "Women"
    id:30
    imageURL: "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-women.png"
    name: "Black Polo"
    price: 300
    quantity: 4
    type: "Polo"
  */

  const search = products.filter((item) =>
    filterTypes.some((category) =>
      item[category].toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const filteredProduct = search.filter(
    (item) =>
      (colorFilter.length === 0 || colorFilter.includes(item.color)) &&
      (genderFilter.length === 0 || genderFilter.includes(item.gender)) &&
      (typeFilter.length === 0 || typeFilter.includes(item.type)) &&
      (priceFilter.length === 0 ||
        (priceFilter[0] < item.price &&
          priceFilter[priceFilter.length - 1] >= item.price))
  );
  return (
    <div className="catalog">
      {products ? (
        filteredProduct.length ? (
          filteredProduct.map((item) => {
            return <ProductCard product={item} key={item.id} />;
          })
        ) : (
          <h3>No products</h3>
        )
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};

export default Catalog;
