import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import geForceLogo from "../../assets/logo@2x.png";
import "./Header.scss";
import Button from "../button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/HiddenLink";

const Header = () => {
  const navigate = useNavigate();
  const [displayName, setdisplayName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setdisplayName(uName);
        } else {
          setdisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Navbar expand="lg" className="bg-header">
      <Container fluid className="container">
        <Navbar.Brand href="/">
          <img src={geForceLogo} width="204px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="#action2">Membership</Nav.Link>
            <Nav.Link href="#action2">Download</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Nav.Link href="#action2">Support</Nav.Link>
          </Nav>
          <Form className="d-flex gap-2">
            <ShowOnLogout>
              <NavLink to="/login">
                <Button type="primary" text="OTURUM AÇ" />
              </NavLink>
            </ShowOnLogout>
            <ShowOnLogin>
              <a
                href="/"
                style={{ color: "#ff7722" }}
                className="mt-1 text-decoration-none"
              >
                <FaUserCircle size={40} className="mx-1" />
                Hi, {displayName}
              </a>
            </ShowOnLogin>
            <ShowOnLogin>
              <NavLink to="/" onClick={logoutUser}>
                <Button type="info" text="OTURUMU KAPAT" />
              </NavLink>
            </ShowOnLogin>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
