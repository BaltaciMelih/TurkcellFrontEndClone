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
                    <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Games</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Membership</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Download</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Support</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-success" type="submit">LET'S PLAY</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;