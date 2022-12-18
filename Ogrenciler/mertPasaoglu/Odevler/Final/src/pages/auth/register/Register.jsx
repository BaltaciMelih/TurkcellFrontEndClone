import React, { useState } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "../../../components/button/Button";
import "./Register.scss";
import heroBanner from "../../../assets/hero-banner.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match.");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration Successful...");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <div className="register">
        <Form className="form" onSubmit={registerUser}>
          <div className="form-container">
            <div className="form-container-inside">
              <br />
              <h2 className="text-center mx-5">
                Register to play with <br /> Game+ Lorem Ipsum
              </h2>
              <br />
              <Row className="mb-3 px-3 gap-3 sub-form">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className="d-flex align-items-center justify-content-center w-100"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name Surname"
                    defaultValue=""
                    className="border rounded-0 input"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom02"
                  className="d-flex align-items-center justify-content-center w-100"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="User Name"
                    defaultValue=""
                    className="border rounded-0 input"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom03"
                  className="d-flex align-items-center justify-content-center w-100"
                >
                  <Form.Control
                    required
                    type="number"
                    placeholder="Phone Number"
                    defaultValue=""
                    className="border rounded-0 input"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom04"
                  className="d-flex align-items-center justify-content-center w-100"
                >
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    className="border rounded-0 input"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom05"
                  className="d-flex align-items-center justify-content-center w-100"
                >
                  <Form.Control
                    required
                    type="date"
                    placeholder="Date of Birth"
                    defaultValue=""
                    className="border rounded-0 input"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom06"
                  className="d-flex align-items-center justify-content-center w-100"
                >
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    className="border rounded-0 input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom07"
                  className="d-flex align-items-center justify-content-center w-100"
                >
                  <Form.Control
                    required
                    type="password"
                    placeholder="Confirm Password"
                    className="border rounded-0 input"
                    value={cPassword}
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="px-3 mb-3 ">
                <div className="terms">
                  <Form.Group className="mb-3 ">
                    <Form.Check
                      required
                      label="Sözlesmeyi ve Gizlilik Sartlari'ni okudum ve kabul ediyorum"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 term">
                    <Form.Check
                      required
                      label="Turkcell Genel Veri Isleme Izni'ni kabul ediyorum."
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                </div>
                <div className="d-flex justify-content-center">
                  <Button type="secondary" text="SUBMIT"></Button>
                </div>
                <p className="text-center mt-3">
                  Daha önceden kayit olduysan hemen <br />{" "}
                  <Link to="/login"> Oturum ac!</Link>{" "}
                </p>
              </Row>
            </div>
          </div>
        </Form>
        <div className="registerImg">
          <img src={heroBanner} width="100%" height="100%" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
