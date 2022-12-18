import React from "react";
import RegisterForm from "../components/RegisterForm";
import RegisterImage from "../components/RegisterImage";

const RegisterPage = () => {
  return (
    <main className="register row">
      <RegisterForm />
      <RegisterImage />
    </main>
  );
};

export default RegisterPage;
