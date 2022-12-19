import React, { useState } from "react";
import "./RegisterForm.scss";
import banner from "../../assets/images/register-img.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema/registerSchema";
import passwordBox from '../../assets/icons/passwordrules.svg';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
const sxStyle = {
  backgroundColor: "#fff",
  paddingLeft: "20px",
};

const RegisterForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

 const navigate = useNavigate();

  const formSubmitHandler = (data) => {
    
    Axios.post('http://localhost:3000/users', data)
    .then(res => console.log('Posting data', res))
    .catch(err => console.log(err))
    setTimeout(() => {
      
      navigate('/home')
  }, 3000)
  }

  return (
    <div className="register-form bg-black d-flex justify-content-center ">
      <div className="row w-100">
        <div className="col-lg-6 px-0 px-md-5 py-lg-5   ">
          <div className="col-8 mx-auto bg-white px-4 py-2 register-container">
            <h3 className="text-center my-4">
              Register to play with Game+ Lorem Ipsum
            </h3>
            <form onSubmit={handleSubmit(formSubmitHandler)} className="form ">
              <div className="form-group">
                <div className="input">
                  <div className="input__area ">
                    <input
                     {...register("name")}
                     type="text" 
                     name="name" 
                     id="name" 
                    
                     />
                    <span className="input__label">Name Surname</span>
                  </div>
                </div>
                {errors.name ? (
                      <span className="error ">
                        {errors.name.message}
                      </span>
                    ) : (
                      <></>
                    )}

              </div>
              <div className="form-group">
                <div className="input">
                  <div className="input__area">
                    <input 
                     {...register("username")}
                    type="text" 
                    name="username" 
                    id="username" />
                    <span className="input__label">User Name</span>
                  </div>
                </div>
                {errors.username ? (
                      <span className="error ">
                        {errors.username.message}
                      </span>
                    ) : (
                      <></>
                    )}


              </div>
              <div className="form-group">
                <div className="input">
                  <div className="input__area">
                    <input 
                    {...register("phone")}
                    type="tel" 
                    name="phone" 
                    id="phone"
                    />
                    <span className="input__label">Phone Number</span>
                  </div>
                </div>
                {errors.phone ? (
                      <span className="error ">
                        {errors.phone.message}
                      </span>
                    ) : (
                      <></>
                    )}


              </div>
              <div className="form-group">
                <div className="input">
                  <div className="input__area">
                    <input
                      {...register("email")}
                      type="email"
                      name="email"
                      id="email"
                    />
                   
                    <span className="input__label">E-posta</span>
                  </div>
                 


                </div>
                {errors.email ? (
                      <span className="error ">
                        {errors.email.message}
                      </span>
                    ) : (
                      <></>
                    )}

              </div>
              <div className="form-group">
                <div className="input">
                  <div className="input__area">
                    <input 
                    {...register("date")}
                    type="date" 
                    name="date" 
                    id="date" />
                    <span className="input__label">Date Of Birth</span>
                  </div>
                </div>
                {errors.date ? (
                      <span className="error ">
                        {errors.date.message}
                      </span>
                    ) : (
                      <></>
                    )}


              </div>
              <div className="form-group pas-rules">
                <div className="input">
                  <div className="input__area mb-3">
                    <input 
                     {...register("password")}
                    type="password" 
                    name="password" 
                    id="password" />

                    <span className="input__label">Password</span>
                  </div >
                
                </div>
                {errors.password ? (
                      <span className="error ">
                        {errors.password.message}
                      </span>
                    ) : (
                      <></>
                    )}
              </div>

              <div className="form-group  check-box  py-1  ">
              <div className="password-box ">
                    <Link className="px-3 password-rules">
                    <span><ins className=""> Password Rules</ins></span> 
                    </Link>
                    <img src={passwordBox}/>
                    <div className="text-dark spans-rules">
                        <span>-En az 6, en fazla 25 karakter içermelidir.</span>
                        <span>-En az 1 büyük ve 1 küçük harf içermelidir.</span>
                        <span>-En az 1 sayı ve 1 sembol içermelidir.</span>
                    </div>
                </div>
                <div className="input-check ">
                  <input
                   {...register("checkboxOne")}
                   type="checkbox" 
                   id="checkboxOne" 
                   name="checkboxOne" />
                  <label className="text-muted text-small checkbox__label ">
                    <ins> Sözleşmeyi</ins> ve <ins>Gizlilik Şartlarını</ins>{" "}
                    okudum ve kabul ediyorum.
                  </label>
                </div>
                {errors.checkboxOne ? (
                      <span className="error ">
                        {errors.checkboxOne.message}
                      </span>
                    ) : (
                      <></>
                    )}

                <div className="input-check ">
                  <input 
                  {...register("checkboxTwo")}
                  type="checkbox" 
                  id="checkboxTwo" 
                  name="checkboxTwo" />
                  <label
                    htmlFor="checkbox__label "
                    className="text-muted checkbox__label"
                  >
                    <ins>ETK,KVKK,Turkcell Genel Veri İşleme</ins> iznini kabul
                    ediyorum.
                  </label>
                </div>
                {errors.checkboxTwo ? (
                      <span className="error ">
                        {errors.checkboxTwo.message}
                      </span>
                    ) : (
                      <></>
                    )}

              </div>

              <Button text="SUBMIT"  /> 
                      {/* butona type vermesemde submit oluyor. */}
              <div className="signup px-4 pt-2 text-center mb-4 ">
                <span className="text-muted ">
                  Daha önceden kayıt olduysan
                  <ins className="p-1">Oturum Aç!</ins>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="col-6 d-none d-lg-block">
          <img className="img-fluid" src={banner} alt="" />
        </div>
      </div>

      {/* <form className="form">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { my: 1, p: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  sx={sxStyle}
                  id="nameSurname"
                  label="Name Surname"
                  variant="standard"
                  
                />

                <TextField
                  sx={sxStyle}
                  id="userName"
                  label="Username"
                  variant="standard"
                />

                <TextField
                  sx={sxStyle}
                  id="phone"
                  label="Phone Number"
                  variant="standard"
                  type="number"
                />

                <TextField
                  sx={sxStyle}
                  name="email"
                  id="email"
                  label="E-mail"
                  variant="standard"
                  autoComplete="email"
                  // type="email"
                  {...register('email', {required: 'Required'})}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                />
               

                <TextField
                  sx={sxStyle}
                
                  className='date'
                  id="date"
                  label="Date of Birth"
                  variant="standard"
                  type="date"
                />
                <TextField
                  sx={sxStyle}
                  id="password"
                  label="Password"
                  variant="standard"
                  type="password"
                />

                <div className="form-group  check-box  py-1 mt-3 p-0 ">
                  <div className="input-check ">
                    <input type="checkbox" id="vehicle1" name="vehicle1" />
                    <label className="text-muted text-small checkbox__label ">
                      <ins> Sözleşmeyi</ins> ve <ins>Gizlilik Şartlarını</ins>{" "}
                      okudum ve kabul ediyorum.
                    </label>
                  </div>

                  <div className="input-check ">
                    <input type="checkbox" id="vehicle2" name="vehicle2" />
                    <label
                      htmlFor="checkbox__label vehicle2"
                      className="text-muted checkbox__label"
                    >
                      <ins>ETK,KVKK,Turkcell Genel Veri İşleme</ins> iznini
                      kabul ediyorum.
                    </label>
                  </div>
                </div>

                <Button text="SUBMIT" submit='submit' />

                <div className="signup px-4 pt-2 text-center mb-4 ">
                  <span className="text-muted ">
                    Daha önceden kayıt olduysan
                    <ins className="p-1">Oturum Aç!</ins>
                  </span>
                </div>
              </Box>
            </form> */}
    </div>
  );
};

export default RegisterForm;
