import "../style/bootstrap-override.scss";
import React, { useState } from "react";
import img from "../img/hero-banner-register.png";
import { useFormik } from "formik";
function RegisterForm() {
  const [postId, setPostId] = useState(null);
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      number: '',
      email: '',
      dateofbirth: '',
      password: ''
    },
    onSubmit: values => {
      
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: values.name, surname: values.username, number: values.number, email: values.email, dateofbirth: values.dateofbirth, password: values.password})
        };
        fetch('http://localhost:8000/users', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
        
    },
  });
  
  return (
    <div >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 bg-secondary ">
            <div className="pt-5 pb-5 mb-5 mt-3">
              
            
            <div className="col-8 mx-auto bg-eighth mt-5 p-4"> 
            <p className="text-center text-sixth fs-3 fw-bold mt-3">Register to play with Game+ Lorem Ipsum</p>
          <form onSubmit={formik.handleSubmit}>
              <input
                className="form-control mb-3 rounded-0 py-3"
                placeholder="Name Surname"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                required
              />
              <input
              className="form-control mb-3 rounded-0 py-3"
              placeholder="Username"
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                required
              />
              <input
              className="form-control mb-3 rounded-0 py-3"
              placeholder="Phone Number"
                id="number"
                name="number"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.number}
                required
              />
              <input
              className="form-control mb-3 rounded-0 py-3"
              placeholder="E-mail"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                required
              />
              <input
              className="form-control mb-3 rounded-0 py-3"
              placeholder="Date of Birth"
                id="dateofbirth"
                name="dateofbirth"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.dateofbirth}
                required
              />
              <input
              className="form-control rounded-0 py-3"
              placeholder="Password"
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              />
              <p className="text-seventh fs-7 "><u> Password rules</u></p>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required/>
                <label className="form-check-label fs-7 text-fourth" htmlFor="flexCheckDefault">
                    <u>Sözleşmeyi</u> ve <u>Gizlilik Şartları</u>'nı okudum ve kabul ediyorum.
                </label>
              </div>
              <div className="form-check mb-2 mt-2">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required/>
                <label className="form-check-label fs-7 text-fourth" htmlFor="flexCheckDefault">
                <u>ETK ve KVKK ve Turkcell Genel Veri İşleme İzni</u>'ni kabul ediyorum.
                </label>
                <div className="invalid-feedback">
        You must agree before submitting.
      </div>
              </div>
            <button type="submit" className="col-12 mt-4">Submit</button>
            <p className="text-third fs-8 text-center mt-3 mb-3">Daha önceden kayıt olduysan hemen <u>Oturum Aç!</u> </p>
          </form>
          </div>
          </div>
          </div>
          <div className="col-6 " style={{ backgroundImage: `url(${img})`, backgroundPosition:"right", backgroundSize:"cover" }}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
