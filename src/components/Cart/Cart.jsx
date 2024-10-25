import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Add Cart - {cart.length}</h3>

      <div className="cart">
        {cart.map((cart) => (
          <img src={cart.img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Cart;
