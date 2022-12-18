import React from "react";
import "../Register/RegisterForm.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { date } from "yup/lib/locale";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "İsim ve soyisminiz en az 3 harften oluşmalıdır.!")
    .max(40, "İsim ve soyisminiz en fazla 40 harften oluşmalıdır.!")
    .required("*Bu alan boş bırakılamaz.!"),
  userName: Yup.string()
    .min(2, "Kullanıcı adınız en az 3 harften oluşmalıdır.!")
    .max(20, "Kullanıcı adınız en fazla 20 harften oluşmalıdır.!")
    .required("*Bu alan boş bırakılamaz.!"),
  phoneNumber: Yup.number()
    .min(10, "Telefon numaranız 10 rakamdan az olamaz!")
    .required("*Bu alan boş bırakılamaz.!"),
  email: Yup.string()
    .email("Invalid email")
    .required("Doğru email adresi girdiğinizden emin olun."),
  password: Yup.string()
    .min(5, "Şifreniz 5 karakterden az olamaz!")
    .max(25, "Şifreniz 25 karakterden fazla olamaz!")
    .required("*Bu alan boş bırakılamaz.!"),
});
function RegisterForm() {
  return (
    <div className="bg-dark p-0 form-height">
      <div className="container-fluid m-0 p-0 d-flex">
        <div className="col-md-6 col-sm-12 bg-dark d-flex justify-content-center pt-104">
          <div className="forms">
            <p className="form-title text-center">
              Register to play with Game+ Lorem Ipsum
            </p>
            <Formik
              initialValues={{
                fullName: "",
                userName: "",
                phoneNumber: "",
                password: "",
                email: "",
                date: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                axios
                  .post("http://localhost:3006/posts", {
                    fullName: values.fullName,
                    userName: values.userName,
                    phoneNumber: values.phoneNumber,
                    password: values.password,
                    email: values.email,
                    date: values.date,
                  })

                  .then((values) => values)
                  .catch((error) =>
                    console.log("Error happened while sending data!", error)
                  );
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="">
                  <Field
                    name="fullName"
                    placeholder="  Name Surname"
                    className="form-group border"
                  />
                  {errors.fullName && touched.fullName ? (
                    <div className="error-name">{errors.fullName}</div>
                  ) : null}
                  <Field
                    name="userName"
                    placeholder="  Username"
                    className="form-group border"
                  />
                  {errors.userName && touched.userName ? (
                    <div className="error-username">{errors.userName}</div>
                  ) : null}
                  <Field
                    name="phoneNumber"
                    placeholder="  Phone Number"
                    className="form-group border"
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div className="error-number">{errors.phoneNumber}</div>
                  ) : null}
                  <Field
                    name="email"
                    type="email"
                    placeholder="  E-mail"
                    className="form-group border"
                  />
                  {errors.email && touched.email ? (
                    <div className="error-mail">{errors.email}</div>
                  ) : null}
                  <Field
                    type="date"
                    name="date"
                    placeholder="Date"
                    className="form-group border"
                  />
                  <Field
                    type="password"
                    name="password"
                    placeholder=" Password"
                    className="form-group border"
                  />
                  {errors.password && touched.password ? (
                    <div className="error-password">{errors.password}</div>
                  ) : null}
                  <div className="d-flex form-checkbox">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                    <div className="d-flex align-items-center">
                      <span className=" form-group-text">
                        <u>Sözleşmeyi</u> ve <u>Gizlilik Şartları’nı</u> okudum
                        ve kabul ediyorum.
                      </span>
                    </div>
                  </div>
                  <div className="d-flex form-checkbox">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                    <div className="d-flex align-items-center">
                      <span className=" form-group-text">
                        <u>ETK, KVKK ve Turkcell Genel Veri İşleme İzni'ni</u>
                        kabul ediyorum.
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="fw-bold text-white form-button"
                  >
                    SUBMIT
                  </button>
                  <div className="login">
                    Daha önceden kayıt olduysan hemen <a href="/">Oturum aç!</a>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="col-md-6 signup-banner d-none d-md-block"></div>
      </div>
    </div>
  );
}

export default RegisterForm;
