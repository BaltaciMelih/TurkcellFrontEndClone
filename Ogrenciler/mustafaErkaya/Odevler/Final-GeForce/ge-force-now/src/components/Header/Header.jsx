
import navlogo from '../../assets/images/navbarlogo.png';
import './Header.scss';

// import '../sass/index.scss';

import { Link, NavLink, useLocation } from 'react-router-dom'
import Button from '../Button/Button';


const Header = () => {

    let location = useLocation()


    return (
        <nav className="navbar navbar-expand-lg  ">
            <div className="container   fw-bold">
                
                <NavLink className="navbar-brand " to="/home">
                    <img className='' src={navlogo} alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav pe-5 ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link active " aria-current="page" to="/games">Games</NavLink>

                        </li>
                        <li className="nav-item mx-2">
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
                        </li>


                    </ul>

                {
                    location.pathname.match('/register')? null : (<Link to="/register">
                    <Button text="REGISTER" />
                     </Link>)
                }
                    


                </div>


            </div>


        </nav>
    )
}

export default Header