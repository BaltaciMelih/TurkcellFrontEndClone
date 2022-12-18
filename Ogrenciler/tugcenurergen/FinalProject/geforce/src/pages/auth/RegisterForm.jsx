import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GreenButton from "../../components/greenButton/GreenButton";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NativeRegister from "../../assets/NativeRegister.png";
import "./RegisterForm.css";
import {Validation} from "./Validation";
import * as yup from "yup";
import Request from "../../api/Request";



function RegisterForm() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const ref = useRef(null);

  const req = new Request("http://localhost:8000/users");
  req
    .get()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));



  async function registerUser(e) {
    e.preventDefault();
    console.log("registeruser");
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      userName: userName,
      number: number,
      email: email,
      date: date,
      password: password,
    };
    const isValid = await Validation.isValid(newUser);
    
    if(isValid) {
      req.post(newUser).then((data) => console.log(data));
      toast.success("Kayıt olma başarılı. Anasayfaya yönlendiriliyorsunuz...");
      setTimeout(() => navigate("/"), 4000);
    } else {
      toast.error("Lütfen Bilgilerinizi kontrol ediniz");
      console.log("error");
    }
  }

  return (
    <div className="w-100 bg-light">
      <ToastContainer />
      <Row className="w-100 h-100 m-auto d-flex justify-content-center align-items-center bg-dark">
        <Col className="col-12 col-md-6 mb-5">
          <Form
            onSubmit={(e) => registerUser(e)}
            className="form m-auto pt-5 pb-5 "
            ref={ref}>
            <h1 className="text-center pb-5">
              Register to play with Game+ Lorem Ipsum
            </h1>
            <Form.Group className=" mb-3" controlId="formBasicName">
              <Form.Control
                className="formControl"
                type="text"
                placeholder="Name Surname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Control
                autoComplete="username"
                className="formControl"
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Control
                autoComplete="number"
                className="formControl"
                type="number"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                autoComplete="email"
                className="formControl"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Control
                className="formControl"
                type="date"
                placeholder="Date of Birth"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                autoComplete="current-password"
                className="formControl"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
              style={{ fontSize: "12px" }}>
              <Form.Check
                className="text-success"
                type="checkbox"
                label="Sözleşmeyi ve gizlilik şartlarını okudum ve kabul ediyorum"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox2"
              style={{ fontSize: "12px" }}>
              <Form.Check
                className="text-success"
                type="checkbox"
                label="ETK, KVKK ve Turkcell Genel Veri İşleme İzni'ni kabul ediyorum"
              />
            </Form.Group>
            <GreenButton
              variant="dark"
              value="SUBMİT"
              type="submit"
              style={{
                width: "100%",
                height: "50%",
                backgroundColor: "#b2b2b2",
              }}
            />

            <span className=" d-flex justify-content-center align-center text-secondary">
              Already have an account?
              <Link to="/login" className="ms-2 text-dark text-decoration-none">
                login
              </Link>{" "}
            </span>
          </Form>
        </Col>
        <Col
          lg={true}
          className="col-12 col-md-6 d-none d-lg-block register-img bg-light w-100 p-0">
          <img className="w-100" src={NativeRegister} alt="registerImg" />
        </Col>
      </Row>
    </div>
  );
}

export default RegisterForm;
