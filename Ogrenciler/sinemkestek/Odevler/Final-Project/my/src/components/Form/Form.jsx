import React, { useEffect, useState } from "react";
import StyledButton from "../Button/StyledButton";
import { Link } from "react-router-dom";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be min 2 characters.")
    .required("Full name is required."),
  username: Yup.string().required("Username is required"),
  phone: Yup.string()
    .required("Number is required.")
    .matches(
      /(^[([(]?)([5])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g,
      "Invalid phone."
    ),
  email: Yup.string()
    .email("Invalid email address.")
    .required("E-mail is required"),
  date: Yup.string().required("Birthday is required."),
  agree: Yup.boolean()
    .oneOf([true], "You must accept the condition")
    .required(),
  agree2: Yup.boolean()
    .oneOf([true], "You must accept the condition")
    .required(""),
  password: Yup.string()
    .min(4, "Password can not be less than 4 characters.")
    .required(),
});

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    username: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <div>
      {/* validationSchema =
      {Yup.object({
        name: Yup.string().required("ddwadawd."),
        username: Yup.string().required("adawdwa"),
        phone: Yup.string()
          .required("adawd")
          .matches(
            /(^[([(]?)([5])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g,
            "Invalid phone."
          ),
        email: Yup.string().email().required("aadaw"),
        date: Yup.string().required("asadaw"),
        agree: Yup.boolean().required("dawdawdawd"),
      })} */}

      <Formik
        initialValues={{
          name: "",
          username: "",
          phone: "",
          email: "",
          date: "",
          password: "",
          agree1: "false",
          agree2: "false",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values); //datayı returnle axiosla post yap
          axios.post("http://localhost:3000/users", {
            id: uuidv4(),
            name: values.name,
            username: values.username,
            phone: values.phone,
            email: values.email,
            birthday: values.date,
            password: values.password,
            agree1: values.agree1,
            agree2: values.agree2,
          });
          setTimeout(() => {
            resetForm();
          }, 4000);
        }}
      >
        {({
          values,
          errors,
          handleSubmit,
          handleChange,
          handleReset,
          isSubmitting,
          onSubmit,
        }) => (
          <form
            className="form"
            onSubmit={handleSubmit}
            // onChange={(e) => {
            //   values["e.target.name"] = e.target.value;
            //   setValues(...values);
            // }}
          >
            <div className="form-group">
              <div className="input">
                <label htmlFor="name">
                  <div className="input__area">
                    <Field name="name">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                        <div
                          className={`${
                            values["name"] !== "" ? "label-top" : ""
                          }`}
                        >
                          <input type="text" name="name" id="name" {...field} />
                          <span className="input__label">Name Surname</span>
                          {meta.touched && meta.error && (
                            <div className="error">{errors.name}</div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="input">
                <label htmlFor="username">
                  <div className="input__area">
                    <Field name="username">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                        <div
                          className={`${
                            values["username"] !== "" ? "label-top" : ""
                          }`}
                        >
                          <input
                            type="text"
                            name="username"
                            id="username"
                            {...field}
                          />
                          <span className="input__label">UserName</span>
                          {meta.touched && meta.error && (
                            <div className="error">{errors.username}</div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="input">
                <label htmlFor="phone">
                  <div className="input__area">
                    <Field name="phone">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                        <div
                          className={`${
                            values["phone"] !== "" ? "label-top" : ""
                          }`}
                        >
                          <input name="phone" type="text" {...field} />
                          <span className="input__label">Phone Number</span>
                          {meta.touched && meta.error && (
                            <div className="error">{errors.phone}</div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="input">
                <label htmlFor="email">
                  <div className="input__area">
                    <Field name="email">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                        <div
                          className={`${
                            values["email"] !== "" ? "label-top" : ""
                          }`}
                        >
                          <input
                            type="text"
                            name="email"
                            id="email"
                            {...field}
                          />
                          <span className="input__label">Email</span>
                          {meta.touched && meta.error && (
                            <div className="error">{meta.error}</div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="input">
                <label htmlFor="date">
                  <div className="input__area">
                    <Field name="date">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                        <div
                          className={`${
                            values["date"] !== "" ? "label-top" : ""
                          }`}
                        >
                          <input type="date" name="date" id="date" {...field} />
                          <span className="input__label">Birthday</span>
                          {meta.touched && meta.error && (
                            <div className="error">{meta.error}</div>
                          )}
                        </div>
                      )}
                    </Field>

                    {/*                     
                    <input
                      type="date"
                      name="date"
                      value={values.date}
                      onChange={handleChange}
                    />
                    <span className="input__label">Date Of Birth</span> */}
                  </div>
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="input">
                <label htmlFor="password">
                  <div className="input__area">
                    <Field name="password">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                        <div
                          className={`${
                            values["password"] !== "" ? "label-top" : ""
                          }`}
                        >
                          <input
                            type="text"
                            name="password"
                            id="password"
                            {...field}
                          />
                          <span className="input__label">Password</span>
                          {meta.touched && meta.error && (
                            <div className="error">{meta.error}</div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                </label>
              </div>
              <div className="ps-4">
                <Link to className="">
                  <small> Password Rules</small>
                </Link>
              </div>
            </div>

            <div className="form-group  check-box ps-3 py-1  ">
              <div className="input-check ">
                <Field name="agree">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => (
                    <div>
                      <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        {...field}
                      />
                      <span className="input__label">
                        {" "}
                        <ins> Sözleşmeyi</ins> ve <ins>Gizlilik Şartlarını</ins>{" "}
                        okudum ve kabul ediyorum.
                      </span>
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </div>

              <div className="input-check ">
                <Field name="agree2">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => (
                    <div>
                      <input
                        type="checkbox"
                        id="agree2"
                        name="agree2"
                        {...field}
                      />
                      <span className="input__label">
                        {" "}
                        <ins>
                          ETK,KVKK,Turkcell Genel Veri İşleme iznini kabul
                          ediyorum.
                        </ins>
                      </span>
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className="formBtn d-flex justify-content-center pt-3">
              <StyledButton
                type="submit"
                bg="grey"
                width="xlarge"
                className="d-block align-self"
              >
                SUBMIT
              </StyledButton>
            </div>
            <div className="SıgnUp px-4 text-center ">
              <span className="text-muted ">
                Daha önceden kayıt olduysan
                <ins className="p-1">Oturum Aç!</ins>
              </span>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
