// App.js
import React from 'react';
import Navbar from './Navbar';
import './ItemsCss.css';
import ProductCard from './Productcard';

import { Link } from 'react-router-dom';
const Items = () => {

  

  return (
    <div>
      <Navbar />
      <br />
      <br />
      {/* Assuming you have data for each product */}
      <div className="row">
        <ProductCard
          imageSrc="./images/samsung2.jpeg"  
          productName="Samsung S24"
          rating={4.5}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/mobile.jpeg"
          productName="Redmi Note 10s"
          rating={4.1}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/iphone.jpeg "
          productName="Apple 14 pro"
          rating={4.2}
          numReviews={14000}
        />
      </div>
      <div className="row">
        <ProductCard
          imageSrc="./images/redmi1.jpeg"
          productName="Redmi Note 10s"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/redmi2.jpeg"
          productName="Redmi Note 8A"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/redmi3.jpeg"
          productName="Redmi 13C"
          rating={4.0}
          numReviews={13767}
        />
      </div>
      <div className="row">
        <ProductCard
          imageSrc="./images/redmi4.jpeg"
          productName="Redmi Note 11"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/samsung1.jpeg"
          productName="Samsung Ultra"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/poco1.jpeg"
          productName="POCO M3"
          rating={4.0}
          numReviews={13767}
        />
      </div>
      <div className="row">
        <ProductCard
          imageSrc="./images/poco2.jpeg"
          productName="POCO F11"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/realme2.jpeg"
          productName="Realme Note 5"
          rating={4.0}
          numReviews={13767}
        />
        <ProductCard
          imageSrc="./images/asus1.jpeg"
          productName="ASUS ROG"
          rating={4.0}
          numReviews={13767}
        />
      </div>
      {/* Add more rows as needed */}
    </div>
  );
};

export default Items;
