import React from "react";
import RegisterImg from "../images/register.png";
import "../styles/register.css";
import bootsrap from "react-bootstrap";
import axios from "axios";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export default function Register() {
  
  const handleSubmit =(event)=>{
    event.preventDefault();
   const namesurname = event.target.namesurname.value;
   const   username= event.target.username.value;
   const  phonenumber= event.target.phonenumber.value;
   const  email= event.target.email.value;
   const  birthday= event.target.birthday.value;
   const  password= event.target.password.value;
   const id= event.target.id.value;
   const data ={ namesurname, username,phonenumber,email,birthday,password, id}
   
   axios
   .post("http://localhost:3000/posts",data)
   .then((response)=>{
    console.log(response);
  })
  .catch((error)=>{
    console.log(error);
  });
  };
  return (
    
    <div className="w-100 ">
      <Header/>
      <div className="container-fluid ">
        <div className="row ">
          <div className=" col-md-6  p-5">
            <div className="  col-md-12">
              <div className="row col-md-8 ">
                <div className="row  " >
                  <div className="icindekiler ">
                    <div className="row  ">
                      <p className="fs-3  text-center mt-3 registerText">
                        Register to play with Game+ Lorem Ipsum
                        <span id="lorem" className="fs-3 fw-bold"></span>
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} className=" col-md-12">
                      <div className="form-group col-md-12 ">
                        <label for="namesurname" />
                        <input 
                        id="namesurname"
                          type="text"
                          className="form-control"
                          
                          placeholder="Name Surname" />
                      </div>
                      <div className="form-group col-md-12">
                        <label for="username"/>
                        <input 
                          id="username"
                          type="text"
                          className="form-control"
                         
                          placeholder="Username"
                          />
                      </div>
                      <div className="form-group">
                        <label for="phonenumber"/>
                        <input 
                        id="phonenumber"
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          />
                      </div>
                      <div className="form-group col-md-12">
                        <label for="email"/>
                        <input 
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="E-Mail"
                          />
                      </div>
                      <div className="form-group col-md-12">
                        <label for="birthday"/>
                        <input 
                          type="date"
                          className="form-control"
                          id="birthday"
                          placeholder="Date of Birth"
                          />
                      </div>
                      <div className="form-group col-md-12">
                        <label for="password"/>
                        <input 
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          />
                      </div>
                      <div className="form-group  col-md-6">
                        <label
                          className="passwordrules text-decoration-underline"
                          for="passwordrules"
                          />
                      </div>
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="sözleşme" />
                        <label
                          className="form-check-label text-secondary"
                          for="sözleşme"
                        />
                          <span className="text-decoration-underline">
                            Sözleşmeyi
                          </span>
                          ve
                          <span className="text-decoration-underline">
                            Gizlilik Şartları
                          </span>
                          'nı okudum ve kabul ediyorum.
                        
                      </div>
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="kvkk"
                          />
                        <label
                          className="form-check-label text-secondary"
                          for="kvkk"
                        />
                          <span className="text-decoration-underline">
                            ETK.
                          </span>
                          <span className="text-decoration-underline ">
                            KVKK ve Turkcell Genel Veri İşleme İzni
                          </span>
                          'ni kabul ediyorum.
                        
                      </div>
                      <button 
                        type="submit"
                        className="btn btn-secondary col-md-12 col-12">
                        Submit
                      </button>
                      <p>
                        Daha önceden kayıt olduysan hemen
                        <span className="text-decoration-underline ">
                          Oturum Aç!
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" me-0 col-md-6 text-dark imgRegister ">
            <img  src={RegisterImg} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}


