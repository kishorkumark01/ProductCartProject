import React from 'react';
import ReactDOM from 'react-dom';
import './payment.css';
function PaymentPage(){
    return <>
      
      <form className='Paymentform'>
      <h1 >Payment Details</h1>
        <div className='div1'>
            <img src='./images/visacard.jpeg' alt='visacard' width={"250px"} height={120}/>
            <img src='./images/paypal.png' alt='paypal' width={"250px"} height={120}/>
        </div>
        <form className='Paymentforminner'>
        <label for="cardNumber" >Card Name</label>
          <input type="text"  placeholder="Card Holder Name" required />
          <label for="cardNumber" >Card Number</label>
          <input type="text"  placeholder="1234 5678 9012 3456" required />
          
          <label for="expiryDate" className='label2'>Expiry Date</label>
          <input type="text" id="expiryDate" className='input2'placeholder="MM/YY" required></input>
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="123" required></input>
          <button type="button" className='btn'>Submit Payment</button>
        </form>
      
      </form>
     </>
}
export default PaymentPage;