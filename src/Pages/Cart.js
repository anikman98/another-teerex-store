/*
  This component is the cart page that will be showed on /cart route.
*/

import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { CartContext } from "../context/CartContext";
import CartProductCard from "../components/CartProductCard";
import { ProductContext } from "../context/ProductContext";
import CartTotal from "../components/CartTotal";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  useEffect(() => {
  }, [cart]);

  return (
    <>
      <Header />
      <div className="cart-container">
        {cart.length ? (
          <>
            <div className="cart-items">
              {cart.map((item) => {
                return (
                  <CartProductCard
                    key={item.id}
                    item={item}
                    product={products.find((product) => product.id === item.id)}
                  />
                );
              })}
            </div>
            <div className="cart-total">
              <CartTotal />
            </div>
          </>
        ) : (
          <EmptyCart/>
        )}
      </div>
    </>
  );
};

export default Cart;
