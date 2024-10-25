import PropTypes from 'prop-types'; // ES6
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Add Cart - {cart.length}</h3>

      <div className="cart">
        {cart.map((cart) => (
          <img key={cart.id} src={cart.img} alt="" />
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;
