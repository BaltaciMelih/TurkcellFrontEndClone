import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "../../../components/button/Button";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import heroBanner from "../../../assets/hero-banner.png";
import { Link, useNavigate } from "react-router-dom";
import "./Login.module.scss";
import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";
import { FaGoogle } from "react-icons/fa";
import styles from "./Login.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login Successful...");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  // Login with Goooglr
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <div className={styles.login}>
        <Form onSubmit={loginUser} className={styles.form}>
          <div className="div">
            <br />
            <h2 className="text-center mx-5 text-white">
              Login to play with Game+ Lorem Ipsum
            </h2>
            <br />
            <Row className={styles.subForm}>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-0 input"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom06">
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded-0 input"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="px-3 mb-3 ">
              <div className="d-flex justify-content-center">
                <Button type="primary" text="GİRİŞ"></Button>
              </div>
              <FaGoogle color="#fff" className="mt-3" />
              <div className="d-flex justify-content-center mt-3">
                <button
                  onClick={signInWithGoogle}
                  className="p-2 px-4 bg-primary border-0 text-white"
                >
                  Login with Google
                </button>
              </div>
              <p className="text-center mt-3 text-white">
                Game+ dünyasına henüz katılmadıysan hemen{" "}
                <Link to="/register"> Üye Ol!</Link>
              </p>
            </Row>
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

export default Login;
