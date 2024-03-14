
import "bootstrap/dist/css/bootstrap.min.css"
import "./LoginStyle.css"
import './ItemsCss.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './Login'
import Items from "./Items";
import SignUp from "./SignUp";
import ProductCard from "./Productcard"
import CartPage from './CartItem'
import Payment from "./FinalPage"
const App = () => {
  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignUp />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/items" element={<Items />} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
