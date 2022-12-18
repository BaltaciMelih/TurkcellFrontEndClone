import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../../pics/DT_02_00_02_NativeRegister_Error.png'
import { Formik, useFormik } from 'formik';
import validations from './validations';
import { useEffect, useState } from 'react';

export default function FormComp() {
  const [name, setName] = useState('');
   const [userName, setUsername] = useState('');
   const [number, setNumber] = useState('');
   const [email, setEmail] = useState('');
   const [date, setDate] = useState('');
   const [password, setPassword] = useState('');

  const handleClick=(e) =>{
    setName(document.getElementById("name").value);
    setUsername(document.getElementById("userName").value);
    setNumber(document.getElementById("number").value);
    setEmail(document.getElementById("email").value);
    setDate(document.getElementById("date").value);
    setPassword(document.getElementById("password").value);

    e.preventDefault();
    fetch("http://localhost:3001/posts", {
      method: "POST",
      body: JSON.stringify({
        name:name,
        userName:userName,
        number:number,
        email:email,
        date:date,
        password:password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((res) => res.json())
    .catch((err) => {console.log(err.message);
    });

  }
  return (
    <div className="formComp">
        <div className="formBack col-md-6 col-12">
            <div className="formWhite">
          <h2 className="formH2">Register to play with Game+ Lorem Ipsum</h2>
            <Formik
            initialValues={{
                name: '',
                userName: '',
                email: '',
                number:'',
                date:'',
                password:'',
            }}
            onSubmit={ (bag) =>{bag.resetForm();}}
            validationSchema={validations}
            >
            {({handleSubmit, handleChange, handleBlur, touched, errors})=>(
                <form className="form" onSubmit={handleSubmit}>
                <input className="input" id="name" name="name" placeholder="Name Surname" onChange={handleChange("name")} onBlur={handleBlur("name")}/>
                {errors.name && touched.name && <div className="errorCss">{errors.name}</div>}
                <input className="input"id="userName" name="userName" placeholder="Username" onChange={handleChange("userName")} onBlur={handleBlur("userName")}/>
                {errors.userName &&touched.userName && <div className="errorCss">{errors.userName}</div>}
                <input className="input"id="number" name="number" placeholder="Phone Number" type="number" onChange={handleChange("number")}onBlur={handleBlur("number")}/>
                {errors.number && touched.number && <div className="errorCss">{errors.number}</div>}
                <input className="input"id="email"name="email"placeholder="Email" type="email"onChange={handleChange("email")} onBlur={handleBlur("email")}/>
                {errors.email && touched.email && <div className="errorCss">{errors.email}</div>}
                <input className="input" id="date" name="date" placeholder="Date of Birth" type="date" onChange={handleChange("date")} onBlur={handleBlur("date")}/>
                {errors.date && touched.date && <div className="errorCss">{errors.date}</div>}
                <input className="input"id="password" name="password" placeholder="Password" type="password" onChange={handleChange("password")} onBlur={handleBlur("password")}/>
                {errors.password && touched.password && <div className="errorCss">{errors.password}</div>}
                <a className="rules">Password Rules</a>
                <label className="cbTextR">
                <input className="cb" type="checkbox" id="checked1" name="checked1" value="sozlesme"/>
                Sözleşmeyi ve Gizlilik Şartları’nı okudum ve kabul ediyorum.
                </label>
                <label className="cbTextR">
                <input className="cb" type="checkbox" id="checked2" name="checked2" value="kvkk"/>
                ETK, KVKK ve Turkcell Genel Veri İşleme İzni'ni kabul ediyorum.
                </label>
                <button className="button" type="submit" onClick={handleClick}>Submit</button>
                <p className="kayıtnot">Daha önceden kayıt olduysan hemen <a href="#">Oturum aç!</a></p>
            </form>
              )
            }
            </Formik>
            </div>
        </div>
        <div className="formImg col-md-6 col-0">
            <img src={banner} alt="form-picture" />
        </div>
    </div>
  )
}
