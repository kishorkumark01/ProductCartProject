import React, { useState } from 'react';
import './FinalPageCss.css'; // Import the CSS file

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your payment processing logic
    console.log(formData); // Just an example, you can replace it with your actual logic
    // Reset form after submission
    setFormData({
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: ''
    });
  };

  return (
    <div className="payment-page-container">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="payment-input"
            required
          />
        </div>
        <div>
          <label htmlFor="cardName">Cardholder Name:</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            className="payment-input"
            required
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            className="payment-input"
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            className="payment-input"
            required
          />
        </div>
        <button type="submit" className="payment-button">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;