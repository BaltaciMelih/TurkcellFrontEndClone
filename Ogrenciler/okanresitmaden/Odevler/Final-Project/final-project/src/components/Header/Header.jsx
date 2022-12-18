import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Buttons/buttons.scss'

const Header = () => {
  return (
    
    <nav className="navbar navbar-expand-md bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarfinal" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img src="https://gameplus.com.tr/static/media/logo.6d064b08.png" className="imglogo" alt="Logo"/>
          <div className="collapse navbar-collapse justify-content-center mt-3 bg-light" id="navbarfinal">
            <ul className="navbar-nav gap-5 mx-2">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#!">Games</a> */}
                <NavLink className='nav-link active' to='games'>Games</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#!">Membership</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#!">Download</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#!">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#!">Support</a>
              </li>
              <div className='d-flex justify-content-center'>
              <button className='button1 mb-3'>LET'S PLAY</button>
              </div>
            </ul>
          </div>
        </div>
    </nav>
    
    
  )
}

export default Header