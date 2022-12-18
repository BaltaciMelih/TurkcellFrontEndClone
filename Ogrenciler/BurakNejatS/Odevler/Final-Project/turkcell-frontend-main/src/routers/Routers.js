import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Games } from "../pages/Games";
import Register from "../pages/Register";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="games" element={<Games />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
