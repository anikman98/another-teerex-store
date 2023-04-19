import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/Cart.css";
import { ProductContext } from "../context/ProductContext";

const CartTotal = () => {
  const { cart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  let product;
  const checkCartTotal = () => {
    let totalAmount = 0;
    cart.map((item) => {
      totalAmount +=
        products.find((product) => product.id === item.id).price *
        item.quantity;
    });
    return totalAmount;
  };

  return (
    <div className="cart-total-details">
      <div className="final-items">
        {cart.map((item) => {
          product = products.find((product) => product.id === item.id);
          return (
            <div className="total-items">
              <div className="item-name">
                <p>{product.name}</p>
              </div>
              <div className="item-total">
                <p>
                  {product.price} x {item.quantity} ={" "}
                  {product.price * item.quantity}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="final-total">
        <hr />
        <h1>
          Total: <span>₹{checkCartTotal()}</span>
        </h1>
      </div>
    </div>
  );
};

export default CartTotal;
