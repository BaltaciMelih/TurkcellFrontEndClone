import React, { useState } from 'react'
import './Register.scss'
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/reducers/Form'

const RegisterComponent = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [datetime, setDateTime] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const registerHandler = (e) => {
        e.preventDefault();
        dispatch(registerUser({name,username,phonenumber,email,datetime,password}))
    }

    return (
        <React.Fragment>
            <div className="row" id='registerHeader'>
                <h4>Register to play with Game+ Lorem Ipsum</h4>
            </div>
            <div className="row" id='registerRow'>
                <form action="" id='registerForm'>
                    <div className="row mb-3">
                        <input type="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name Surname' id="NameSurname"  />
                    </div>
                    <div className="row mb-3">
                        <input type="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' id="UserName" />
                    </div>
                    <div className="row mb-3">
                        <input type="phonenumber" className="form-control" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder='Phone Number' id="PhoneNumber" />
                    </div>
                    <div className="row mb-3">
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' id="Email" />
                    </div>
                    <div className="row mb-3">
                        <input type="datetime-local" className="form-control" value={datetime} onChange={(e) => setDateTime(e.target.value)} placeholder='Date of Birth' id="DateOfBirth" />
                    </div>
                    <div className="row mb-3">
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' id="Password" />
                        <div id="emailHelp" class="form-text d-flex justify-content-start ms-3"><NavLink rel="stylesheet" href="" >Password Rules</NavLink></div>
                    </div>
                    <div className="row mb-3">
                        <input type="checkbox" class="form-check-input" id="Check1"/>
                        <label class="form-check-label" for="Check1" id='Check1Label'>Sözleşmeyi ve Gizlilik Şartları’nı okudum ve kabul ediyorum.</label>
                    </div>
                    <div className="row mb-3">
                        <input type="checkbox" class="form-check-input" id="Check2"/>
                        <label class="form-check-label" for="Check2" id='Check2Label'>ETK, KVKK ve Turkcell Genel Veri İşleme İzni'ni kabul ediyorum.</label>
                    </div>
                    <button onClick={registerHandler} type='submit' id='registerButton'>
                       <p>SUBMIT</p> 
                    </button>
                </form>
            </div>

        </React.Fragment>
    )
}

export default RegisterComponent