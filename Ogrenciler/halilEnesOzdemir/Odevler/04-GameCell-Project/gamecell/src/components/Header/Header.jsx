import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Header.scss';
import { useLocation } from 'react-router-dom';

function Header() {
  let location = useLocation();

  return (
    <>
      <nav className='navbar navbar-expand-md bg-white py-3  '>
        <div className='container-md px-lg-3 px-2 ms-2 '>
          <Link className='navbar-brand ms-lg-3' to='/'>
            <img
              className='logo-img '
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/05D02D0F-C436-4842-9A6E-56C4D0D077D8.png'
              alt=''
            />
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#gameplusNavbar'>
            <span>
              <img
                src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/10D39C65-7309-4B26-A9CD-F37EC7EA5FE2.svg'
                alt=''
              />
            </span>
          </button>
          <div className='collapse navbar-collapse' id='gameplusNavbar'>
            <div className='navbar-nav ms-auto d-flex flex-flex-sm-column justify-content-center align-items-center gap-4  '>
              <Link className='nav-item nav-link text-black fw-semibold' to='/games'>
                Games
              </Link>
              <Link className='nav-item nav-link text-black fw-semibold' to='#'>
                Membership
              </Link>
              <Link className='nav-item nav-link text-black fw-semibold' to='#'>
                Download
              </Link>
              <Link className='nav-item nav-link text-black fw-semibold' to='#' tabIndex='-1' aria-disabled='true'>
                Blog
              </Link>
              <Link className='nav-item nav-link text-black fw-semibold' to='#' tabIndex='-1' aria-disabled='true'>
                Support
              </Link>
              {location.pathname.match('/register') ? null : (
                <Link to='/register'>
                  <Button width='185px' height='40px' children={"LET'S PLAY"} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
