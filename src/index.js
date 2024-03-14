import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//
//import Login from './components/Login'
//import './components/LoginStyle.css';
// import './components/ItemsCss.css';
//import Items from './components/Items';
import App from './components/App'
import reportWebVitals from './reportWebVitals';
// import PaymentPage from './components/payment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>  
    {/* {<PaymentPage />} */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
