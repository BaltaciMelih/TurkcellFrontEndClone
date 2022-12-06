import React, {useState} from 'react'
import {auth, fs } from '../Config/Config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {Link} from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar';
import logo from '../assets/images/logo.png'


export const Signup = () => {

    const navigate = useNavigate();

    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const handleSignup =(e) => {
        e.preventDefault();
        console.log(fullName, email, password, phone);
        // firebaseden gelen email ve pasword ile kullanıcı oluşturma metodu
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            // debugger;
            console.log(userCredential);
            console.log('kralsın')
            const user = userCredential.user;
            const initialcartvalue = 0;
            console.log(user);

            addDoc(collection(fs, "users"), {
                FullName: fullName,
                Email: email,
                Password: password,
                Phone: phone,
                Cart: initialcartvalue,
                Uid: user.uid
            }).then(() => {
                setSuccessMsg('New user added succesfully, you will now be automatically redirected to login page')
                setFullname('');
                setEmail('');
                setPassword('');
                setPhone('');
                setErrorMsg('')
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/login')
                }, 3000)
            }).catch((error) => {
                setErrorMsg(error.message)
            });
        })
        .catch((error) => {
           if(error.message === 'Firebase: Error (auth/invalid-email).'){
                setErrorMsg('Please Fill all required fields')
           }
           if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
            setErrorMsg('User already exists')
       }
        });
    
    }

    //         fs.collection('users').doc(userCredential.user.uid).set({
    //             FullName: fullName,
    //             Email: email,
    //             Password: password,
    //             Phone: phone
    //         }).then((response)=>{
    //             console.log(response);
    //             setSuccessMsg('Signup Successfull. You will now automatically get redirected to Login Page');
    //             setFullname('');
    //             setEmail('');
    //             setPassword('');
    //             setErrorMsg('');
    //             setTimeout(()=>{
    //                 setSuccessMsg('');
    //                 navigate.push('/login');
    //             },3000)
    //         }).catch(error=>setErrorMsg(error.message));
    //     }).catch((error)=>{
    //         setErrorMsg(error.message)
    //     })
    // }
  return (
    <>
    <Navbar/>
    <div className='container signup ' >
        <div className='row'>
            <div className='col-6 mx-auto'>
                
                <div className='col-4 mx-auto'>
                <img className='img-fluid' src={logo} alt="" />
                </div>
                
                <h1>Sign Up</h1>
                <hr />
                {successMsg&&<>
                <div className='success-msg alert alert-success mb-2'>{successMsg}</div>
              
                 </>}
                {errorMsg&&<>
               
                    <div className='error-msg alert alert-danger mb-2'>{errorMsg}</div>   
                             
                 </>}
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
    </>
  )
}
