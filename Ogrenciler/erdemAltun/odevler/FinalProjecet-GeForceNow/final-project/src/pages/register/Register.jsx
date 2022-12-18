import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.scss";
import axios from "axios";

export default function Register() {
  const [formState, setFormState] = useState(true);

  const formik = useFormik({
    initialValues: {
      NameSurname: "",
      UserName: "",
      PhoneNumber: "",
      Email: "",
      Date: "",
      Password: "",
      termsAndCondtions: false,
      kvkk: false,
    },

    validationSchema: Yup.object({
      NameSurname: Yup.string()
        .min(5, "Minumum 5 karakter olmalıdır.")
        .required("Bu alan boş bırakılamaz"),
      UserName: Yup.string()
        .max(15, "Maximum 15 karakter olmalıdır.")
        .required("Bu alan boş bırakılamaz"),
      PhoneNumber: Yup.number()
        .min(10, "Minumum 10 haneli telefon numarası girilmelidir.")
        .required("Bu alan boş bırakılamaz"),
      Email: Yup.string()
        .email("Doğru bir mail adresi giriniz")
        .required("Bu alan boş bırakılamaz"),
      Date: Yup.date()
        .min("1969-11-13", "Tarih çok erken")
        .required("Bu alan boş bırakılamaz"),
      Password: Yup.string()
        .min(8, "Paralonız minumum 8 karakterden oluşmalıdır")
        .required("Bu alan boş bırakılamaz"),
      termsAndCondtions: Yup.boolean().oneOf(
        [true],
        "Sözleşmeyi ve Gizlilik Şartları'nı kabul ediniz"
      ),
      kvkk: Yup.boolean().oneOf([true], "ETK, KVKK ve Turkcell Genel Veri İşleme İzni'ni kabul ediniz"),
    }),
    onSubmit: (values, { resetForm }) => {
      const postApi = async () => {
        axios
          .post("http://localhost:3002/userdetails", values)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      };
      postApi();
      resetForm();
      document.getElementById("kvkk").checked = false;
      document.getElementById("termsAndCondtions").checked = false;
    },
  });
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12 left-part ">
            <form
              className="form-bg px-3 py-3 round-0 mx-auto align-items-center my-5"
              onSubmit={formik.handleSubmit}
            >
              <p className="register-banner mb-4">
                Register to play with Game+ Lorem Ipsum
              </p>
              <div className="mb-3" controlid="NameSurname">
                <input
                  name="NameSurname"
                  type="text"
                  className="form-control"
                  id="NameSurname"
                  placeholder="Name Surname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.NameSurname}
                />
                <div className="text-danger">
                  {formik.touched.NameSurname && formik.errors.NameSurname ? (
                    <div className="text-danger">
                      {formik.errors.NameSurname}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mb-3" controlid="UserName">
                <input
                  name="UserName"
                  type="text"
                  className="form-control"
                  id="UserName"
                  placeholder="UserName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.UserName}
                />
                <div className="text-danger">
                  {formik.touched.UserName && formik.errors.UserName ? (
                    <div className="text-danger">{formik.errors.UserName}</div>
                  ) : null}
                </div>
              </div>

              <div className="mb-3" controlid="PhoneNumber">
                <input
                  name="PhoneNumber"
                  type="text"
                  className="form-control"
                  id="PhoneNumber"
                  placeholder="PhoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.PhoneNumber}
                />
                <div className="text-danger">
                  {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
                    <div className="text-danger">
                      {formik.errors.PhoneNumber}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mb-3" controlid="Email">
                <input
                  name="Email"
                  type="text"
                  className="form-control"
                  id="Email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Email}
                />
                <div id="emailHelp" className="form-text">
                  Mail adresiniz 3. şahıslarla paylaşılmayacaktır.
                </div>
                <div className="text-danger">
                  {formik.touched.Email && formik.errors.Email ? (
                    <div className="text-danger">{formik.errors.Email}</div>
                  ) : null}
                </div>
              </div>

              <div className="mb-3" controlid="Date">
                <input
                  name="Date"
                  type="date"
                  className="form-control"
                  id="Date"
                  placeholder="Date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Date}
                />
                <div className="text-danger">
                  {formik.touched.Date && formik.errors.Date ? (
                    <div className="text-danger">{formik.errors.Date}</div>
                  ) : null}
                </div>
              </div>

              <div className="mb-3" controlid="Password">
                <input
                  name="Password"
                  type="Password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Password}
                />
                <div className="text-danger">
                  {formik.touched.Password && formik.errors.Password ? (
                    <div className="text-danger">{formik.errors.Password}</div>
                  ) : null}
                </div>
              </div>

              <div className="mb-3 form-check" controlid="termsAndCondtions">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsAndCondtions"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.termsAndCondtions}
                />
                <label className="form-label" htmlFor="termsAndCondtions">
                  Sözleşmeyi ve Gizlilik Şartları'nı okudum ve kabul ediyorum.
                </label>
              </div>
              {formik.touched.termsAndCondtions &&
              formik.errors.termsAndCondtions ? (
                <div className="text-danger">
                  {formik.errors.termsAndCondtions}
                </div>
              ) : null}

              <div className="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="kvkk"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.kvkk}
                />
                <label className="form-label" htmlFor="kvkk">
                  ETK, KVKK ve Turkcell Genel Veri İşleme İzni'ni kabul
                  ediyorum.
                </label>
              </div>
              {formik.touched.kvkk && formik.errors.kvkk ? (
                <div className="text-danger">{formik.errors.kvkk}</div>
              ) : null}

              <button
                type="submit"
                className="btn w-100 btn-register myButton fw-bold"
                onClick={(values) => setFormState(values)}
              >
                SUBMIT
              </button>
              <p className="mt-3">
                Daha önceden kayıt olduysan hemen{" "}
                <a
                  href="#"
                  className="sign fw-bold text-decoration-underline text-dark"
                >
                  Oturum aç!
                </a>
              </p>
            </form>
          </div>
          <div className="col-lg-6 col-sm-6 right-part"></div>
        </div>
      </div>
    </>
  );
}
