import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import register_right from "../../assets/register_right.png";
import  Button  from "../../components/button/Button";
import "./Register.scss";
/* <pre>{JSON.stringify(state)}</pre> */
const Register = () => {
  let [state, setState] = useState({
    user: {
      username: "",
      email: "",
      password: "",
    },
  });

  let updateInput = (e) => {
    setState({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  let register = (e) => {
    e.preventDefault();
    console.log(state.user);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <main className="register">
      <Container fluid className="px-0">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">            
            <Card className="p-3 rounded-0 card">
              <Card.Header
                className="p-3 bg-white"
              >
                <h4>Register to play with Game+ Lorem Ipsum</h4>
              </Card.Header>
              <Card.Body>
                <Form oValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Control
                      required
                      className="rounded-0 my-2"
                      name="name"
                      onChange={updateInput}
                      type="text"
                      placeholder="name Surname"
                      defaultValue="Mark"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      className="rounded-0"
                      name="username"
                      onChange={updateInput}
                      type="text"
                      placeholder="Username"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      className="rounded-0"
                      name="phonenumber"
                      onChange={updateInput}
                      type="text"
                      placeholder="Phone Number"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      className="rounded-0"
                      name="email"
                      onChange={updateInput}
                      type="text"
                      placeholder="E-mail"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      className="rounded-0"
                      name="dateofbirth"
                      onChange={updateInput}
                      type="date"
                      placeholder="Date of Birth"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      className="rounded-0"
                      name="password"
                      onChange={updateInput}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 register_text">
        <Form.Check
          required
          label="Sözleşmeyi ve Gizlilik Şartları’nı okudum ve kabul ediyorum."
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
                  </Form.Group>
                  <Form.Group className="mb-3 register_text">
        <Form.Check
          required
          label="ETK, KVKK ve Turkcell Genel Veri İşleme İzni'ni kabul ediyorum."
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
                  </Form.Group>
                  <Form.Group className="mb-3">                   
                    <Button 
                    className="fiveBtn rounded-0 my-3" 
                    onClick={register} 
                    variant="warning" 
                    type="submit"
                    name={"SUBMIT"}>                    
                    </Button>
                    <p>Daha önceden kayıt olduysan hemen hemen <b>Oturum aç!</b></p>
                  </Form.Group>
                  

                </Form>
              </Card.Body>
            </Card>
          </div>
          <div className="col d-flex justify-content-center">
            <img src={register_right} alt="register_right" />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Register;
