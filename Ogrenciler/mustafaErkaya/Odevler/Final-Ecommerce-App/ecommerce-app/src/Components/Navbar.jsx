import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import shoppingcard from '../assets/images/shopping-cart.png'
import user from '../assets/images/user.png'

const Navbar = () => {
  return (
   
        
        

        <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home"> <img src={logo} alt="" style={{width: 50}}/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#">Link</NavLink>
        </li>
       
        
      </ul>
      
      <Link to="/signup"><button className='btn btn-danger'>Sign Up</button> </Link>
          <Link to="/login"><button className='btn btn-success'>Login </button></Link>
       
       <Link to="/cart">
          <div className='cart'>
            <img src={shoppingcard} alt="" style={{width: 50}}/>
            <span className='py-1 px-2 bg-dark rounded-circle count'>0</span>
          </div>
       </Link>

      <Link to="userprofile">
        <img src={user} alt="" style={{width: 50}}/>
      </Link>
    </div>
    

  </div>

    
</nav>
   
  )
}

export default Navbar