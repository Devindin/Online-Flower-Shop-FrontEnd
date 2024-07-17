import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screen/Home";
import { CartProvider } from './context/CartContext';
import GraduationCollection from "./Screen/GraduationCollection";
import FlowerDetail from "./Screen/FlowerDetail";
import CartPage from './Screen/CartPage';
import BirthdayCollection from "./Screen/BirthdayCollection";
import WeddingCollection from "./Screen/WeddingCollection";
import HomeDeco from "./Screen/HomeDeco";
import ValentineCollection from "./Screen/ValentineCollection";
import NormalCollection from "./Screen/NormalCollecion";
import Login from "./Screen/Login";
import SignUp from "./Screen/SignUp";
import OrderSuccess from "./Screen/OrderSuccess";
import AdminPanel from "./Screen/AdminPanel";
import NormalHeader from "./Components/NormalHeader";
function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="GraduationCollection" element={<GraduationCollection/>} />
      <Route path="/flower/:id" element={<FlowerDetail/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="BirthdayCollection" element={<BirthdayCollection/>} />
      <Route path="WeddingCollection" element={<WeddingCollection/>} />
      <Route path="HomeDeco" element={<HomeDeco/>} />
      <Route path="ValentineCollection" element={<ValentineCollection/>} />
      <Route path="NormalCollection" element={<NormalCollection/>} />
      <Route path="Login" element={<Login/>} />
      <Route path="SignUp" element={<SignUp/>} />
      <Route path="OrderSuccess" element={<OrderSuccess/>} />
      <Route path="AdminPanel" element={<AdminPanel/>} />
      <Route path="NormalHeader" element={<NormalHeader/>} />
    </Routes>
    </CartProvider>
  </BrowserRouter>
  );
}

export default App;
