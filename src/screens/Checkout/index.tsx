import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { supabase } from '../../supabaseClient';
import './styles.css';

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
};

const Checkout = () => {
  const { cart, getTotal } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Save order to Supabase
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          customer_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          items: cart,
          total: getTotal(),
        },
      ]);

    if (error) {
      console.error('Error saving order:', error);
      alert('Error placing order');
    } else {
      // Send to WhatsApp
      const message = `New Order: ${formData.name}, Total: ₦${getTotal().toFixed(2)}, Items: ${cart.map((item: CartItem) => `${item.name} x${item.quantity}`).join(', ')}`;
      const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`; // Replace with your number
      window.open(whatsappUrl, '_blank');

      // Send email (using mailto for simplicity)
      const emailBody = `Order Details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nTotal: ₦${getTotal().toFixed(2)}\nItems: ${cart.map((item: CartItem) => `${item.name} x${item.quantity} - ${item.price}`).join('\n')}`;
      window.location.href = `mailto:your-email@example.com?subject=New Order&body=${encodeURIComponent(emailBody)}`;

      alert('Order placed successfully!');
    }
  };

  return (
    <section className="checkout-section" id="checkout">
      <h2>Checkout</h2>
      <div className="checkout-container">
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cart.map((item: CartItem) => (
            <div key={item.id} className="summary-item">
              <span>{item.name} x{item.quantity}</span>
              <span>{item.price}</span>
            </div>
          ))}
          <div className="total">
            <strong>Total: ₦{getTotal().toFixed(2)}</strong>
          </div>
        </div>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <button type="submit" className="place-order-btn">Place Order</button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;