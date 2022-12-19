import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { Home, Admin, Login, Shop, ProductDetails, Cart } from "../pages";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default Routers;
