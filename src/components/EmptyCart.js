import "../css/Cart.css";

const EmptyCart = () => {
  return (
      <div className="empty-card">
        <h3>Cart is empty!</h3>
        <small>Please add something...</small>
      </div>
  );
};

export default EmptyCart;
