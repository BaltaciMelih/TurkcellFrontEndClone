import React,{useState} from 'react'
// import {auth} from '../Config/Config'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import logo from '../assets/images/logo.png'
import {useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const auth = getAuth(); // configde zaten tanımlamıştık
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log( email, password );

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setSuccessMsg('Logged in Succesfuly, you will be teleported to the home page ')

            setEmail('');
            setPassword('');
            setErrorMsg('')
            setTimeout(() => {
                setSuccessMsg('')
                navigate('/home')
            }, 3000)
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            console.log(error.message);
            if(error.message === 'Firebase: Error (auth/invalid-email).'){
                setErrorMsg('Please Fill all required fields') // gerek varmnı bilemedim
           }
           if(error.message === 'Firebase: Error (auth/user-not-found).') {
                setErrorMsg('Email not found')
           }
           if(error.message === 'Firebase: Error (auth/wrong-password).') {
            setErrorMsg('Wrong Password')
           }
        })
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
                    {successMsg&&<>
                <div className='success-msg alert alert-success mb-2'>{successMsg}</div>
              
                 </>}
                {errorMsg&&<>
               
                    <div className='error-msg alert alert-danger mb-2'>{errorMsg}</div>   
                             
                 </>}
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
