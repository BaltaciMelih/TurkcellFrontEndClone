import React from 'react'
import Navbar from '../01navbar/Nav'
import RegisterBanner from "../../assets/img/register/registerbanner.png"
import "./Register.css"

const Register = () => {
    return (
        <div className='register'>
            <Navbar />
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-12 col-lg-6 bg-dark">

                        <div className="row  my-5 p-5">
                            {/* <!-- Formlar --> */}
                            <form className="col-lg-9 mx-auto bg-white py-4">
                                <div className="col-12">
                                    <label for="validationServer01" className="form-label"></label>
                                    <input type="text" className="form-control" id="validationServer01" placeholder="Name Surname" required />
                                    <div className="valid-feedback">

                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="validationServer02" className="form-label"></label>
                                    <input type="text" className="form-control " id="validationServer02" placeholder="Username" required />
                                    <div className="valid-feedback">

                                    </div>
                                </div>
                                <div className="col-12">
                                    <label for="validationServer02" className="form-label"></label>
                                    <input type="numbe" className="form-control " id="validationServer02" placeholder="Phone Number" required />
                                    <div className="valid-feedback">

                                    </div>
                                </div>
      
                                <div className="col-12">
                                    <label for="validationServer03" className="form-label"></label>
                                    <input type="text" className="form-control" id="validationServer03" placeholder="Email" aria-describedby="validationServer03Feedback" required />
                                    <div id="validationServer03Feedback" className="invalid-feedback">

                                    </div>
                                </div>
          
                                
                                <div className="col-12">
                                    <label for="validationServer04" className="form-label"></label>
                                    <input type="date" className="form-control" id="validationServer04"  aria-describedby="validationServer03Feedback" required />
                                    <div id="validationServer04Feedback" className="invalid-feedback">

                                    </div>
                                </div>
                               
                                <div className="col-12">
                                    <label for="validationServer05" className="form-label"></label>
                                    <input type="password" className="form-control " placeholder="Password" id="validationServer05" aria-describedby="validationServer05Feedback" required />
                                    <div id="validationServer05Feedback" className="invalid-feedback">

                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input is-valid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                                        <label className="form-check-label" for="invalidCheck3">
                                            <p className="text-muted">Sözleşmeyi ve Gizlilik Şartları’nı okudum ve kabul ediyorum.</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input  is-valid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                                        <label className="form-check-label" for="invalidCheck3">
                                            <p className="text-muted"><u>ETK, KVKK ve Turkcell Genel Veri İşleme İzni'ni kabul ediyorum.</u></p>
                                        </label>
                                        <div id="invalidCheck3Feedback" className="invalid-feedback">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-success px-5 text-center" type="submit">Submit form</button>
                                </div>
                            </form>



                        </div>
                    </div>



                    <div className="col-6 bg-dark d-none d-lg-block"><img className="img-fluid" src={RegisterBanner} alt="" /></div>

                </div>
            </div>


        </div>
    )
}

export default Register