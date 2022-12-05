import React from 'react'
import {Link} from 'react-router-dom'

export const Signup = () => {
  return (
    <div className='container ' >
        <div className='row'>
            <div className='col-6 mx-auto'>
                <h1>Sign Up</h1>
                <hr />
                <form className='form-group' autoComplete='off'>
                    <label >Full Name</label>
                    <input type="text" className='form-control mb-3' required />

                    <label >Email</label>
                    <input type="email" className='form-control mb-3' required />

                    <label >Password</label>
                    <input type="password" className='form-control mb-3' required />

                    <label >Phone</label>
                    <input type="number" className='form-control mb-3' required />

                    <div className='d-flex justify-content-between align-items-center mt-4'>
                    <span>Already have an account Login
                    <Link to="login" className='link'> Here</Link></span>
                    <button className='btn btn-success '>SING UP</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}
