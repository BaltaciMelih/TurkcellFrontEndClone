import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.scss'
import Button from '../DefaultButton'

 const Navbar = () => {
  let buttonText = "LET'S PLAY"; 
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <div className="logo-image">
        <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/05D02D0F-C436-4842-9A6E-56C4D0D077D8.png" className="img-fluid"></img>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/games">Games</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Button buttonIsim={buttonText} className="btn btn-outline-success" type="submit"></Button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar;