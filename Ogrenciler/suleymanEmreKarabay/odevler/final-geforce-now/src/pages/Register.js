import React from "react";
import Footer from "../components/Footer/Footer";
import RegisterContent from "../components/RegisterContent/RegisterContent";
import Navbar from "../components/Navbar/Navbar";

function Register() {
  return (
    <>
      <Navbar navbarGizle="d-none" />
      <RegisterContent />
      <Footer homeControl="d-none" registerControl="d-block" />
    </>
  );
}

export default Register;
