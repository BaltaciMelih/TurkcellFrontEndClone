import React, {useState} from 'react'
import {auth} from '../Config/Config'
import {Link} from 'react-router-dom'



export const Signup = () => {

    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const handleSignup =(e) => {
        e.preventDefault();
        // console.log(fullName, email, password, phone);
        // firebaseden gelen email ve pasword ile kullanıcı oluşturma metodu
        auth.createUserWithEmailAndPassword(email, password)
        .then((credential) => {
            console.log(credential)
        })
        .catch((error) => {
            setErrorMsg(error.message)
        })
    }

  return (
    <div className='container ' >
        <div className='row'>
            <div className='col-6 mx-auto'>
                <h1>Sign Up</h1>
                <hr />
                <form className='form-group ' autoComplete='off' onSubmit={handleSignup}>
                    <label >Full Name</label>
                    <input type="text" className='form-control mb-3' required 
                     onChange={(e)=>setFullname(e.target.value)} value={fullName}/>

                    <label >Email</label>
                    <input type="email" className='form-control mb-3' required   
                    onChange={(e)=>setEmail(e.target.value)} value={email}/>

                    <label >Password</label>
                    <input type="password" className='form-control mb-3' required   
                    onChange={(e)=>setPassword(e.target.value)} value={password}/>

                    <label >Phone</label>
                    <input type="number" className='form-control mb-3' required   
                    onChange={(e)=>setPhone(e.target.value)} value={phone}/>

                    <div className='d-flex flex-column flex-md-row justify-content-between align-items-center mt-4'>
                    <span>Already have an account Login
                    <Link to="/login" className='link'> Here</Link></span>
                    <button type='submit' className='btn btn-success btn-md'>SING UP</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}
