import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import RegisterImg from "../assets/images/Register.png";

const Register = () => {
  return (
    <div>
      <Header></Header>
      <div className=" bg-black  ">
        <div className="d-flex registerSection justify-content-center">
          <div className="col-md-6  registerContainer ">
            <div className="registerContent  d-flex flex-column align-items-center justify-content-center">
              <h2 className="">Register to play with Game+ Lorem Ipsum</h2>
              <div className="registerForm  d-flex flex-column justify-content-center align-items-center "></div>
              <Form></Form>
            </div>
          </div>

          <div className="col-6 registerRight">
            <img src={RegisterImg} className="h-100 w-100 " alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
