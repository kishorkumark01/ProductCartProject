// Navbar.js
import React from 'react';
import './ItemsCss.css'
const Navbar = () => {
  return (
    <nav className="navs">
      <input type="text" placeholder="Search" />
      <h3>MOBILES</h3>
     <ul>
     <li><a href='#home'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#login'>Login</a></li> 
     </ul>       
      <img src='./images/grocery-store.png' alt='grocery'/>
    </nav>
  );
};

export default Navbar;
