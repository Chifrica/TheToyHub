import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './styles.css';

type CartItem = {
  id: string;
  img: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  return (
    <section className="cart-section" id="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item: CartItem) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Price: {item.price}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ₦{getTotal().toFixed(2)}</h3>
            <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;