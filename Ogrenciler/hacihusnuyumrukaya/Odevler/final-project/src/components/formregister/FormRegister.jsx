import React,{useState} from "react";
import styles from "./FormRegister.module.scss";
import formregister from "../../images/formregister.png";
import axios from  "axios";
import { connect } from "react-redux";
const mapState = (state) => {
  return {
    data: state.data,
    
  };
};

 const FormRegister= () => {

  const [name,setName]=useState("");
  const [username,setUsername]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [bdate,setBdate]=useState("");
  const [password,setPassword]=useState("");
  if(name!==""){ document.getElementById("name").classList="form-control mb-3 is-valid";}
  if(username!==""){document.getElementById("username").classList="form-control mb-3 is-valid";}
  if(phone!==""){document.getElementById("phone").classList="form-control mb-3 is-valid";}
  if(email!==""){document.getElementById("email").classList="form-control mb-3 is-valid";}
  if(bdate!==""){document.getElementById("bdate").classList="form-control mb-3 is-valid";}
  if(password.length>=6&&password.length<=18){document.getElementById("password").classList="form-control mb-3 is-valid";}
  function handleClick(){
   
        if(name===""){document.getElementById("name").classList="form-control mb-1 is-invalid";}
        else{document.getElementById("name").classList="form-control mb-3 ";}
        if(username===""){document.getElementById("username").classList="form-control  is-invalid";}
        else {document.getElementById("username").classList="form-control mb-3 ";}
        if(phone===""){document.getElementById("phone").classList="form-control is-invalid";}
        else {document.getElementById("phone").classList="form-control mb-3 ";}
        if(email===""){document.getElementById("email").classList="form-control  is-invalid";}
        else {document.getElementById("email").classList="form-control mb-3 ";}
        if(bdate===""){document.getElementById("bdate").classList="form-control  is-invalid";}
        else {document.getElementById("bdate").classList="form-control mb-3 ";}
        if(password.length<6){document.getElementById("password").classList="form-control  is-invalid";}
        else {document.getElementById("password").classList="form-control mb-3 ";}
        if(!document.getElementById("flexCheck").checked){document.getElementById("flexCheck").classList="form-check-input is-invalid";}
        else{document.getElementById("flexCheck").classList="form-check-input ";}
        if(!document.getElementById("flexCheck2").checked){document.getElementById("flexCheck2").classList="form-check-input is-invalid";}
        else{document.getElementById("flexCheck2").classList="form-check-input ";}
        if(name!=="" && username!=="" &&phone!=="" && email!=="" && bdate!=="" && password.length>6 && document.getElementById("flexCheck").checked && document.getElementById("flexCheck2").checked){
          axios.post('http://localhost:3002/login/', {
            name: name,
            username: username,
            phone:phone,
            email:email,
            bdate:bdate,
            password:password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
   
    setName("");
    setUsername("");
    setPhone("");
    setEmail("");
    setBdate("");
    setPassword("");
  }


  return <div > 
      <div className={styles.forms}>
      <div className={styles.formsleft}>
        <div className={styles.formbox}>
          <div className={styles.Registerplay}>Register to play with Game+ Lorem Ipsum</div>
         
          <form className=" needs-validation" noValidate >
            
            <div> <input 
                id="name"
                value={name} 
                onChange={e=>setName(e.target.value)}
                className="form-control mb-3 " 
                type="text" 
                placeholder="Name Surname" required/>
                 <div className="invalid-feedback">
                       Please enter your full name
                </div>
            </div> 
            <div>
                <input 
                id="username"
                value={username} 
                onChange={e=>setUsername(e.target.value)}
                className="form-control mb-3 " 
                type="text" 
                placeholder="Username"/>
                   <div className="invalid-feedback">
                       Username should be unique
                </div>
            </div>   
            <div>
                <input 
                id="phone"
                value={phone} 
                onChange={e=>setPhone(e.target.value)}
                className="form-control mb-3" 
                type="phone" 
                placeholder="Phone Number"/>
                  <div className="invalid-feedback">
                    Please enter your phone number
                </div>
            </div> 
            <div>
                <input 
                id="email"
                value={email} 
                onChange={e=>setEmail(e.target.value)}
                className="form-control mb-3" 
                type="text" 
                placeholder="E-mail"/>
                   <div className="invalid-feedback">
                    Please enter your e-mail
                </div>
            </div> 
            <div>
                <input 
                id="bdate"
                value={bdate} 
                onChange={e=>setBdate(e.target.value)}
                className="form-control mb-3" 
                type="date" 
                placeholder="Date of Birth"/>
                 <div className="invalid-feedback">
                   13 yaşından büyük olmanız gerekmektedir.
                </div>
            </div> 
            <div>
                <input 
                id="password"
                value={password} 
                onChange={e=>setPassword(e.target.value)}
                className="form-control " 
                type="password" 
                placeholder="Password"/>
               <div className="invalid-feedback">
                    Please enter your password
                </div>
            </div> 
              <span className={styles.PasswordRules}><u>Password Rules</u></span>
              <div className="form-check mt-3">
              <div>
                <input className="form-check-input" type="checkbox" value="" id="flexCheck"/>
                <label className={styles.check1} htmlFor="flexCheck">
                <u>Sözleşmeyi</u> ve <u>Gizlilik Şartları</u>’nı okudum ve kabul ediyorum.
                </label>
            </div> 
             </div>
             <div className="form-check ">
              <div>
                <input className="form-check-input" type="checkbox" value="" id="flexCheck2"/>
                <label className={styles.check1} htmlFor="flexCheck2">
                <u>ETK</u>, <u>KVKK ve Turkcell Genel Veri İşleme İzni</u>'ni kabul ediyorum.
                </label>
            </div> 
             </div>
         </form>
          <button onClick={handleClick} type="submit" className={styles.buttonregister}>SUBMIT</button>
          <div className={styles.SubmitText}>Daha önceden kayıt olduysan hemen <b><u>Oturum aç!</u></b></div>
        </div>
      </div>

      <div className={styles.formsright}>
      <img alt="" src={formregister} className={styles.logo}/>
      </div>
      </div>

  </div>; 
};

export default connect(mapState, null)(FormRegister);
