import React,{useState} from "react";
import {Nav} from 'react-bootstrap';
const Login = () => {
    const [href,sethref]=useState("");
    function login(){
     let username= document.querySelector(".username");
     let password= document.querySelector(".password");
     if(username.value==="admin"){
          if(password.value==="admin"){
            // document.getElementById("navlink").href="/";
            // console.log(document.getElementById("navlink"));
            sethref("/admin");
          }
     }
     else
     {
       alert("hatalı");
       username.value="";
       password.value="";
     }
    }
    
  return (
    <div className="d-flex justify-content-center">
      <div className="containershadow-lg bg-light m-5 p-2 border col-4 ">

            <h1>Admin Paneli</h1>
            <input type="username" className="username form-control mb-2" placeholder="Username"/>
            <input type="password" className="password form-control mb-2" placeholder="Password"/>
            <button type="submit"  className="btn btn-secondary btn-lg btn-block" onClick={login}><Nav.Link id="navlink" href={href}>Giriş Yap</Nav.Link></button>

      </div>
    </div>
  );
};

export default Login;
