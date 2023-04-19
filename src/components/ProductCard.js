import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import '../css/ProductCard.css';

const ProductCard = ({product}) => {

    const {cart, setCart} = useContext(CartContext);

    const handleAddToCart = () => {
        if(cart.find(item => item.id === product.id)){
            let updatedCart = cart.map(item => {
                                if(item.id === product.id){
                                  if (item.quantity < product.quantity)
                                    ++item.quantity;
                                  else{
                                    alert("Only "+product.quantity+" "+product.name+" are available.")
                                  }
                                }
                                console.log(item);
                                return item;
                              })
            setCart(updatedCart);
        }else{
          setCart((prev) => [...prev, {
            id : product.id,
            quantity: 1
          }])
        }
    }
    
  return (
    <div className="product-card">
      <div className="images">
        <img src={product.imageURL} alt={product.name} className="image" />
      </div>
      <div className="details">
        <div className="product-name">
            <h3>{product.name}</h3>
        </div>
        <div className="others">
            <p>Price: {product.price}</p>
            <button className="add-cart-btn" onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard