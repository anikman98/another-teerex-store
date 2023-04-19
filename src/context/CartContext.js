import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    const calculateCartItemsCount = () => {
      let count = 0;
      cart.map(item => {
        count+=item.quantity;
      })
      setCartItemCount(count);
    }

    useEffect(() => {
      calculateCartItemsCount();
    },[cart])

    return (
      <CartContext.Provider value={{ cart, setCart, cartItemCount }}>
        {props.children}
      </CartContext.Provider>
    );
};

export default CartProvider;