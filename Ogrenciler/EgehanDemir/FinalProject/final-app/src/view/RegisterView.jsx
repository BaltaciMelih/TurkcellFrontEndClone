import React from 'react'
import RegisterComponent from '../components/Register/RegisterComponent';
import '../sass/_register.scss'

 const Register = () => {
  return (
    <React.Fragment>
      <div className="container-fluid" id='registerContainer'>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6" id='registerColumn'>
            <div className="container-fluid" id='formContainer'>
            <RegisterComponent />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6" id='imageColumn'>
            <img src={require('../images/RegisterImage.jpg')} alt="" />
          </div>
        </div>
      </div>
      
    </React.Fragment>  
  )
};
export default Register;