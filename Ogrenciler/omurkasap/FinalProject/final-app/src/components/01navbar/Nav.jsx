import React from "react"
import Button from "../Button/Button"
import Logo from "../../assets/img/logo/logo.png"
import {NavLink, Link} from "react-router-dom"
import "./navbar.css"
function Navbar (){
    return(
    <div className="navbar bg-white">
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
    </div>
    
    )
}
export default Navbar