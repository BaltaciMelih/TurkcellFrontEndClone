import {useState} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineShoppingBag } from "react-icons/hi";
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

const logo = (
  <div className={styles.logo}>
          <Link to="/">
          green
          <HiOutlineShoppingBag size={28} />
            <h2>              
              <span>Store</span>
            </h2>
          </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
              <Link to="/cart">
                Cart
                <FaShoppingCart size={20} />
                <p>0</p>
              </Link>
  </span>
);

const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "")


const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout successfully.")
      navigate("/")
    }).catch((error) => {
      toast.error(error.message)
    });
  };

  return (
    <header>
      <div className={styles.header}>  

        <NavLink to="/home" className={activeLink}>
          {logo}
        </NavLink>
                     
        <nav className={showMenu ? `${styles["show-nav"]}`
        : `${styles["hide-nav"]}`}>

          <div className={showMenu ? `${styles
          ["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
          : `${styles["nav-wrapper"]}`
          }
          onClick={hideMenu}
          ></div>             

            <ul onClick={hideMenu}>           
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" 
              onClick={hideMenu} />
            </li>
            </ul>
          
            <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/contact" className={activeLink}>Contact Us</NavLink>
              <NavLink to="/login" className={activeLink}>Login</NavLink>
              <NavLink to="/register" className={activeLink}>Register</NavLink>
              <NavLink to="/order-history" className={activeLink}>My Orders</NavLink>              
              <NavLink to="/" onClick={logoutUser}>Logout</NavLink>              
            </span>
            {cart}
            </div>
          
        </nav>

        <div className={styles["menu-icon"]}>
            {cart}
            <HiOutlineMenuAlt3 size={28} onClick={toogleMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header