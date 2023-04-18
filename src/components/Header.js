import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
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
        </Link>
      </div>
    </header>
  );
}

export default Header