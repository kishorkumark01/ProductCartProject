import React, { useState } from 'react';
import './CartItemCss.css'; 
import { Link } from 'react-router-dom';

const CartPage=()=>{
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20, quantity: 2 },
    { id: 3, name: 'Product 3', price: 30, quantity: 1 }
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div>
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: 
              <input
                className="quantity-input"
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
            </p>
            <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h3>Total Price: ${getTotalPrice()}</h3>
      </div>
      <button className='cbtn'><Link  to="/payments" >Payment</Link></button> 
    </div>
  );
};

export default CartPage;