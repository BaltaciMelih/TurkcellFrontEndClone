import { Form, Formik } from "formik";
import { advancedSchema } from "../../schemas/index";
import './login.scss'
import CustomCheckbox from "./CustomCheckbox";
import CustomCheckboxtwo from "./CustomCheckboxtwo";
import CustomInput from "./CustomInput";

const onSubmit = async (values, actions) => {
  try {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
    const data = await response.json();
  } catch (error) {
    alert("Error")
  } finally {
    actions.resetForm();
  }
};

const LoginScreen = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
         <div className='col-md-6 col-12 bg-secondary text-white d-flex justify-content-center'>
              <div className='loginbox text-dark d-flex flex-column'>
                <h2 className='text-center'>Register to play with Game+ Lorem Ipsum</h2>
                <Formik
                  initialValues={{ name: "", username: "", phone:"",email:"", birth:"",password:"", acceptedTos: false, acceptedTos2:false }}
                  validationSchema={advancedSchema}
                  onSubmit={onSubmit}>
                  {({ isSubmitting }) => (
                    <Form className="d-flex flex-column align-items-center">
                      <CustomInput
                        name="name"
                        type="text"
                        placeholder="Name Surname"
                      />
                      <CustomInput
                        name="username"
                        type="text"
                        placeholder="Username"
                      />
                      <CustomInput
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                      />
                      <CustomInput
                        name="email"
                        type="email"
                        placeholder="E-mail"
                      />
                      <CustomInput
                        name="birth"
                        type="date"
                        placeholder="Date of Birth"
                      />
                      <CustomInput
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                      <div className="d-flex justify-content-start flex-column mb-4">
                      <CustomCheckbox type="checkbox" name="acceptedTos" deneme="Sözleşmeyi ve Gizlilik Şartları'nı okudum ve kabul ediyorum." />
                      <CustomCheckboxtwo type="checkbox" name="acceptedTos2" deneme="ETK. KVKK ve Turkcell Genel Veri İşleme İzni'ni kabul ediyorum." />
                      </div>
                      <button className="mb-3" disabled={isSubmitting} type="submit">
                        SUBMIT
                        </button>
                       <p className="mb-4" >Daha önceden kayıt olduysan hemen Oturum aç!</p>
                    </Form>
                   )}
                 </Formik>
                
               </div>
          </div>
       <div className='col-6 imgpart d-none d-md-block'></div>
       </div>
     
     </div>
   )
 }
 export default LoginScreen