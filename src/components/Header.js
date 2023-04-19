import { Link } from 'react-router-dom';
import { useContext } from 'react';
import '../css/Header.css';
import { CartContext } from '../context/CartContext';

const Header = () => {

  const { cart, cartItemCount } = useContext(CartContext);

  return (
    <header>
      <div className="logo">
        <h1>Teerex</h1>
      </div>
      <div className="links">
        <Link to="/" className="links-item">
          <h3>Products</h3>
        </Link>
        <Link to="/cart" className="links-item">
          <h3>Cart</h3>
          <div className="cart-item-count">{cartItemCount}</div>
        </Link>
      </div>
    </header>
  );
}

export default Header