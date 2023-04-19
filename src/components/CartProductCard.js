import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/Cart.css";

const CartProductCard = ({ item, product }) => {
  const { cart, setCart } = useContext(CartContext);

  const deleteProduct = () => {
    if (cart.find(cartItem => item.id===cartItem.id)) {
      //remove the object from the cart state
      let updatedCart = cart.filter((cartItem) => item.id !== cartItem.id);
      setCart(updatedCart);
    } else {
      alert("Item does not exist!");
    }
  };

  const decreaseItem = () => {
    if (cart.find((cartItem) => item.id === cartItem.id)) {
      let updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
            if (item.quantity > 1) {
                --cartItem.quantity;
            }else{
                alert('Item quantity cannot be 0 (Zero).')
            }
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      alert("Item does not exist!");
    }
  };

  const increaseItem = () => {
    if (cart.find((cartItem) => item.id === cartItem.id)) {
      let updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          if (item.quantity === product.quantity) {
            alert(
              "Only " +
                product.quantity +
                " " +
                product.name +
                " are available."
            );
          } else {
            ++cartItem.quantity;
          }
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      alert("Item does not exist!");
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-card-image">
        <img src={product.imageURL} alt={product.name}/>
      </div>
      <div className="cart-card-content">
        <div className="product-details">
          <div className="product-name">
            <h3>{product.name}</h3>
          </div>
          <div className="product-price">
            <h4>
              Price: {product.currency}&nbsp;{product.price}
            </h4>
          </div>
        </div>
        <div className="product-action">
          <div className="product-quantity">
            <h4>Quantity: </h4>
            <button onClick={decreaseItem}>-</button>
            <span> {item.quantity} </span>
            <button onClick={increaseItem}>+</button>
          </div>
          <div className="product-delete">
            <button onClick={deleteProduct}>Remove item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
