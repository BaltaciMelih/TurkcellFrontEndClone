import React from "react"
import Button from "../Button/Button"
import Logo from "../../assets/img/logo/logo.png"
import {NavLink, Link} from "react-router-dom"
import "./navbar.css"
function Navbar (){
    return(
    <div className="navbar">
         <nav className="navbar navbar-expand-lg w-100 ">
            <div className="container   fw-bold">
                
                <NavLink className="navbar-brand " to="/home">
                    <img className='' src={Logo} alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav pe-5 ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link active " aria-current="page" to="/games">Games</NavLink>
                        </li><li className="nav-item mx-2">
                            <NavLink className="nav-link" to="#">Membership</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link" to="#">Download</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link" to="#">Blog</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link" to="#">Support</NavLink>
                        </li></ul>
                    <Link to="/register">
                        <Button text = "LET'S PLAY"/>
                    </Link>
                </div>
            </div>
        </nav>

{/* <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Link</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link disabled">Disabled</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
    </div>
    
    )
}
export default Navbar