import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container">
                    <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/05D02D0F-C436-4842-9A6E-56C4D0D077D8.png" width={"317px"} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto nav-list">
                        <li className="nav-item me-5 mt-3">
                        <a className="nav-link" aria-current="page" href="#">Games</a>
                        <img className="nav-triangle" src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/871E1D8D-D685-4D0D-9CCD-70687629F2B2.svg"/>
                        </li>
                        <li className="nav-item me-5 mt-3">
                        <a className="nav-link" href="#">Membership</a>
                        </li>
                        <li className="nav-item me-5 mt-3">
                        <a className="nav-link" href="#">Download</a>
                        </li>
                        <li className="nav-item me-5 mt-3">
                        <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item me-5 mt-3">
                        <a className="nav-link" href="#">Support</a>
                        </li>
                        <li className="me-5 mt-3">
                        <button className="nav-buton" type="submit">LET'S PLAY</button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;