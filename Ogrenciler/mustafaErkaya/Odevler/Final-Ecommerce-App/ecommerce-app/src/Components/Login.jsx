import React from 'react'
import {Link} from 'react-router-dom'

export const Login = () => {
  return (
    <div className='container ' >
    <div className='row '>
        <div className='col-6 mx-auto'>
            <h1>Login</h1>
            <hr />
            <form className='form-group' autoComplete='off'>
                

                <label >Email</label>
                <input type="email" className='form-control mb-3' required />

                <label >Password</label>
                <input type="password" className='form-control mb-3' required />

                

                <div className='d-flex justify-content-between align-items-center mt-4'>
                <span>Don't have an account SignUp
                <Link to="/signup" className='link'> Here</Link></span>
                <button type='submit' className='btn btn-success '>LOGIN</button>
                </div>
            </form>
        </div>
    </div>

</div>
  )
}
