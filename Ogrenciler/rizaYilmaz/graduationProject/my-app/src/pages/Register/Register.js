import Menu from "../../components/Menu";
import RegisterForm from "../../components/RegisterForm";
import Footer from "../../components/Footer"
import "../../style/bootstrap-override.scss";
function Register(){
  return(
    <>
    <Menu button={false}/>
    <RegisterForm/>
    <Footer register={true}/>
    </>
  );
}
export default Register;