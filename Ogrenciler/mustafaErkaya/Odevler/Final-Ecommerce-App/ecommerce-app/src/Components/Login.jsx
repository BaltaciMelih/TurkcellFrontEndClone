import React,{useState} from 'react'
// import {auth} from '../Config/Config'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import logo from '../assets/images/logo.png'
export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log( email, password );
    }

  return (
    <>
            <Navbar/>
            <div className='container ' >
            <div className='row '>
                <div className='col-6 mx-auto'>
                    <div className='col-4 mx-auto'>
                    <img className='img-fluid' src={logo} alt="" />
                    </div>
                
                    <h1>Login</h1>
                    <hr />
                    <form className='form-group ' autoComplete='off' onSubmit={handleLogin}>
                        

                        <label >Email</label>
                        <input type="email" className='form-control mb-3' required  
                        onChange={(e)=>setEmail(e.target.value)} value={email}/>

                        <label >Password</label>
                        <input type="password" className='form-control mb-3' required 
                        onChange={(e)=>setPassword(e.target.value)} value={password}/>

                        

                        <div className='d-flex flex-column flex-md-row  justify-content-between align-items-center mt-4'>
                        <span>Don't have an account SignUp
                        <Link to="/signup" className='link'> Here</Link></span>
                        <button type='submit' className='btn btn-success '>LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
</>
  )
}
