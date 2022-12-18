import React from "react";
import Button from "./Button";
import { useFormik } from "formik";
import userSchema from "./RegisterValidation";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      phone: "",
      email: "",
      date: "",
      password: "",
      acceptTerms: false,
      acceptKVKK: false,
    },
    onSubmit: async (values, { resetForm }) => {
      await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      resetForm();
    },
    validationSchema: userSchema,
  });

  return (
    <div className="register-left col-lg-6 col-sm-12">
      <form className="register-form" onSubmit={formik.handleSubmit}>
        <h3 className="text-center">Register to play with Game+ Lorem Ipsum</h3>
        <div className="form-floating form-item">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label className="text-muted" htmlFor="name">
            Name Surname
          </label>
          {formik.errors.name && formik.submitCount > 0 && (
            <div className="form-error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-floating form-item">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          <label className="text-muted" htmlFor="userName">
            Username
          </label>
          {formik.errors.userName && formik.submitCount > 0 && (
            <div className="form-error">{formik.errors.userName}</div>
          )}
        </div>

        <div className="form-floating form-item">
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <label className="text-muted" htmlFor="phone">
            Phone
          </label>
          {formik.errors.phone && formik.submitCount > 0 && (
            <div className="form-error">
              <div className="form-error">{formik.errors.phone}</div>
            </div>
          )}
        </div>

        <div className="form-floating form-item">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label className="text-muted" htmlFor="email">
            Email
          </label>
          {formik.errors.email && formik.submitCount > 0 && (
            <div className="form-error">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-floating form-item">
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            placeholder="Date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          <label className="text-muted" htmlFor="date">
            Date
          </label>
          {formik.errors.date && formik.submitCount > 0 && (
            <div className="form-error">{formik.errors.date}</div>
          )}
        </div>

        <div className="form-floating form-item position-relative">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <label className="text-muted" htmlFor="password">
            Password
          </label>
          {formik.errors.password && formik.submitCount > 0 && (
            <div className="form-error">{formik.errors.password}</div>
          )}
          <span className="password-rules">password rules</span>
          <div className="password-rules-content position-absolute text-black">
            <span>- En az 6, en fazla 25 karakter içermelidir.</span>
            <span>- En az 1 büyük, 1 küçük harf ve 1 rakam içermelidir.</span>
            <span>- 3 tekrarlayan karakter içermemelidir.</span>
            <span>- 3 ardışık karakter içermemelidir.</span>
          </div>
        </div>

        <div className="form-item d-flex">
          <input
            className="checkbox"
            type="checkbox"
            id="check1"
            name="acceptTerms"
            onChange={formik.handleChange}
            value={formik.values.acceptTerms}
          />
          <label className="text-muted check-content" htmlFor="check1">
            Sözleşmeyi ve Gizlilik Şartları’nı okudum ve kabul ediyorum.
          </label>
          {formik.errors.acceptTerms && formik.submitCount > 0 && (
            <div className="form-error">Onay zorunludur.</div>
          )}
        </div>

        <div className="form-item d-flex">
          <input
            className="checkbox"
            type="checkbox"
            id="check2"
            name="acceptKVKK"
            onChange={formik.handleChange}
            value={formik.values.acceptKVKK}
          />
          <label className="text-muted check-content" htmlFor="check2">
            ETK, KVKK ve Turkcell Genel Veri İşleme İzni'ni kabul ediyorum.
          </label>
          {formik.errors.acceptKVKK && formik.submitCount > 0 && (
            <div className="form-error">Onay zorunludur.</div>
          )}
        </div>

        <Button type="submit" color="primary" width="384" content="SUBMIT" />
        <small className="text-center text-muted d-flex justify-content-center">
          Daha önceden kayıt olduysan hemen Oturum aç!
        </small>
      </form>
    </div>
  );
};

export default RegisterForm;
