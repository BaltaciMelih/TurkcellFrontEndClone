import React from 'react';
import './RegisterHeader.scss';

function RegisterHeader() {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-white py-3 '>
        <div className='container px-lg-4 px-2 ms-2 '>
          <a className='navbar-brand' href='#'>
            <img
              className='logo-img'
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/05D02D0F-C436-4842-9A6E-56C4D0D077D8.png'
              alt=''
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'>
            <span>
              <img
                src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/10D39C65-7309-4B26-A9CD-F37EC7EA5FE2.svg'
                alt=''
              />
            </span>
          </button>
          <div className='collapse navbar-collapse ' id='navbarNavAltMarkup'>
            <div className='navbar-nav ms-auto'>
              <a className='nav-item nav-link ' href='#'>
                Games
              </a>
              <a className='nav-item nav-link' href='#'>
                Membership
              </a>
              <a className='nav-item nav-link' href='#'>
                Download
              </a>
              <a className='nav-item nav-link ' href='#' tabIndex='-1' aria-disabled='true'>
                Blog
              </a>
              <a className='nav-item nav-link ' href='#' tabIndex='-1' aria-disabled='true'>
                Support
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default RegisterHeader;
