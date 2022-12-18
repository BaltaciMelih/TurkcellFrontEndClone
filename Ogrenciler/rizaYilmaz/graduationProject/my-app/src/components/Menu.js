import "../style/bootstrap-override.scss";
import logo from "../img/logoTurkcell.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "./Button";

  function Menu({button}){
  return (
    <>
    <Navbar bg="eight" expand="md" className="py-2">
      <Container >
        <Navbar.Brand href="#"><img src={logo} alt="Logo PNG" className="img-responsive"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#" className="fw-bold text-secondary me-4">Games</Nav.Link>
            <Nav.Link href="#" className="fw-bold text-secondary me-4">Membership</Nav.Link>
            <Nav.Link href="#" className="fw-bold text-secondary me-4">Download</Nav.Link>
            <Nav.Link href="#" className="fw-bold text-secondary me-4">Blog</Nav.Link>
            <Nav.Link href="#" className="fw-bold text-secondary">Support</Nav.Link>
          </Nav>
          {button === true ? <Button content="LET'S PLAY"/> : '' }
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
    </>
  );
}

export default Menu;
