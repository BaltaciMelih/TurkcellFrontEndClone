import "../style/bootstrap-override.scss";
import twitter from "../img/icon-twitter.png";
import facebook from "../img/icon-facebook.png";
import youtube from "../img/icon-youtube.png";
import instagram from "../img/icon-instagram.png";
import arrow from "../img/icons-arrow-large.png"
function Footer({register}){
    return(
        <>
        <div className="footerTop">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-2 mt-4">
                        {register=== true ? 
                        <ul className="list-unstyled">
                            <li className="fs-6 text-center text-md-start">Games</li>
                            <li className="fs-6 text-center text-md-start">Blog</li>
                            <li className="fs-6 text-center text-md-start">Contact Us</li>
                        </ul> :  
                        <ul className="list-unstyled">
                            <li className="fs-6 text-center text-md-start">Games</li>
                            <li className="fs-6 text-center text-md-start">Membership</li>
                            <li className="fs-6 text-center text-md-start">Download</li>
                        </ul>
                        }
                        
                    </div>
                    <div className="col-12 col-md-2 mt-4">
                        {register === false ?
                            <ul className="list-unstyled">
                                <li className="fs-6 text-center text-md-start">Contact Us</li>
                                <li className="fs-6 text-center text-md-start">Blog</li>
                            </ul> :
                            ''
                        }
                    </div>
                    <div className="col-12 col-md-2 mt-4">
                        {register === false ?
                            <ul className="list-unstyled">
                                <li className="fs-6 text-center text-md-start">FAQs</li>
                                <li className="fs-6 text-center text-md-start">Service Status</li>
                                
                            </ul> :
                            ''
                        }
                    </div>
                    <div className="col-12 col-md-4 text-center mt-4">
                        <p className="fw-bold fs-6 text-center">Follow Us !</p>
                        <div className="d-flex justify-content-center">
                            <img src={facebook} alt="Facebook Logo" className="me-2"/>
                            <img src={twitter} alt="Twitter Logo" className="me-2"/>
                            <img src={instagram} alt="Instagram Logo" className="me-2"/>
                            <img src={youtube} alt="Youtube Logo"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-2 mt-4">
                        <p className="fw-bold fs-6 text-center text-md-start">Site Language</p>
                        <p className="fs-6 text-center text-md-start">English <img src={arrow} alt="Arrow Logo"/></p>
                    </div>
                </div>
            </div>
        </div>

        <div className="footerBottom bg-sixth">
            <div className="container py-1">
                <div className="row d-flex justify-content-around">
                    <div className="col-12 col-md-1 ">
                        <p className="text-eighth fw-bold fs-7 text-center ">Terms of Use</p>
                    </div>
                    <div className="col-12 col-md-1">
                        <p className="text-eighth fw-bold fs-7 text-center">Privacy Policy</p>
                    </div>
                    <div className="col-12 col-md-1">
                        <p className="text-eighth fw-bold fs-7 text-center">Cookies</p>
                    </div>
                    <div className="col-12 col-md-9">
                        <p className="text-eighth fs-7 text-md-end text-center">Tüm hakları saklıdır.</p>
                    </div>
                </div>
            </div>
         </div>
         </>
    );
}
export default Footer;