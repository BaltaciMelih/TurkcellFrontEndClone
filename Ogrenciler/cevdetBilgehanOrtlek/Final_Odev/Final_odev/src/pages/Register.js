import React from "react";
import Footer from "../components/Footer/Footer";
import RegisterPage from "../components/Register/RegisterPage";
import Navbar from "../components/Navbar/Navbar";

function Register() {
  return (
    <>
      <Navbar navbarGizle="d-none" />
      <RegisterPage />
      <Footer homeControl="d-none" registerControl="d-block" />
    </>
  );
}

export default Register;
