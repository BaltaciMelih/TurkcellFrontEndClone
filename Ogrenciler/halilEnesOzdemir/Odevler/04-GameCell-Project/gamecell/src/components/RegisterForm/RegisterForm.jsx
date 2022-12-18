import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import './RegisterForm.scss';
import registerImg from '../../assets/register.png';

function RegisterForm() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row d-flex flex-col justify-content-center align-items-center bg-black'>
          <div className='col col-sm-10 col-lg-5  d-flex flex-column align-items-center justify-content-center'>
            <Formik
              initialValues={{
                name: '',
                userName: '',
                phoneNumber: '',
                email: '',
                dateOfBirth: '',
                password: '',
                agree1: '',
                agree2: ''
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('İsim boş bırakılamaz.'),
                userName: Yup.string().required('Kullanıcı adınızı giriniz'),
                phoneNumber: Yup.number().required('Telefon numaranızı giriniz.'),
                email: Yup.string().email().required('Email boş bırakılamaz'),
                dateOfBirth: Yup.date()
                  .max(new Date(Date.now() - 567648000000), 'You must be at least 18 years')
                  .required('Required'),
                password: Yup.string().min(4, 'Too short').max(50, 'Too Long!').required('Required'),
                agree1: Yup.boolean().required('Koşulları kabul etmelisin'),
                agree2: Yup.boolean().required('Koşulları kabul etmelisin')
              })}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                console.log(values);
                setTimeout(() => {
                  setSubmitting();
                  resetForm();
                }, 2000);
              }}>
              {({ values, errors, handleChange, handleSubmit, handleReset, dirty, isSubmitting, touched }) => (
                <form onSubmit={handleSubmit}>
                  <h2 className='text-center text-white mt-3 p-2 h2'>Register to play with Game+ Lorem Ipsum</h2>
                  <div className='container bg-black py-3 px-2 px-lg-3 '>
                    <div className='form-label mb-3'>
                      <input
                        type='text'
                        className='form-control py-3  rounded-0 '
                        name='name'
                        value={values.name}
                        placeholder='Name Surname'
                        onChange={handleChange}
                      />
                      {errors.name && touched.name && <div className='text-danger'>{errors.name}</div>}
                    </div>

                    <div className='form-label mb-3'>
                      <input
                        type='text'
                        className='form-control py-3 rounded-0'
                        name='userName'
                        placeholder='User Name'
                        value={values.userName}
                        onChange={handleChange}
                      />
                      {errors.userName && touched.userName && <div className='text-danger'>{errors.userName}</div>}
                    </div>
                    <div className='form-label mb-3'>
                      <input
                        type='tel'
                        className='form-control py-3 rounded-0'
                        name='phoneNumber'
                        placeholder='Phone Number'
                        value={values.phoneNumber}
                        onChange={handleChange}
                      />
                      {errors.phoneNumber && touched.phoneNumber && (
                        <div className='text-danger'>{errors.phoneNumber}</div>
                      )}
                    </div>
                    <div className='form-label mb-3'>
                      <input
                        type='email'
                        className='form-control py-3 rounded-0'
                        name='email'
                        value={values.email}
                        placeholder='Email'
                        onChange={handleChange}
                      />
                      {errors.email && touched.email && <div className='text-danger'>{errors.email}</div>}
                    </div>
                    <div className='form-label mb-3'>
                      <input
                        placeholder='Date of Birth'
                        type='date'
                        className='form-control py-3 rounded-0'
                        name='dateOfBirth'
                        value={values.dateOfBirth}
                        onChange={handleChange}
                      />
                      {errors.dateOfBirth && touched.dateOfBirth && (
                        <div className='text-danger'>{errors.dateOfBirth}</div>
                      )}
                    </div>
                    <div className='form-label mb-3'>
                      <input
                        type='password'
                        className='form-control py-3 rounded-0 '
                        name='password'
                        placeholder='Password '
                        value={values.password}
                        onChange={handleChange}
                      />
                      {errors.password && touched.password && <div className='text-danger'>{errors.password}</div>}
                    </div>
                    <p className='text-muted text-decoration-underline' href='#'>
                      Password rules
                    </p>

                    <div className='form-check d-flex justify-content-start'>
                      <input
                        className='form-check-input me-2 mb-3'
                        type='checkbox'
                        value={values.agree1}
                        name='agree1'
                        onChange={handleChange}
                      />
                      {errors.agree1 && touched.agree1 && <div className='text-danger'>{errors.agree1}</div>}
                      <label className='form-check-label text-muted mb-2 ' htmlFor='agree'>
                        <span className='text-decoration-underline'> Sözleşmeyi</span> ve
                        <span className='text-decoration-underline'> Gizlilik Şartları </span>’nı okudum ve kabul
                        ediyorum.
                      </label>
                    </div>
                    <div className='form-check d-flex justify-content-start'>
                      <input
                        className='form-check-input me-2 mb-3'
                        type='checkbox'
                        value={values.agree2}
                        name='agree2'
                        onChange={handleChange}
                      />
                      {errors.agree2 && touched.agree2 && <div className='text-danger'>{errors.agree2}</div>}
                      <label className='form-check-label text-muted mb-3' htmlFor='agree2'>
                        <span className='text-decoration-underline'> Turkcell Genel Veri İşleme İzni </span>'ni kabul
                        ediyorum.
                      </label>
                    </div>
                    <button
                      type='submit'
                      disabled={!dirty || isSubmitting}
                      className='btn btn-lg d-block mx-auto bg-secondary bg-opacity-100 w-100 rounded-0 text-white p-2 mb-3'>
                      SUBMIT
                    </button>
                    <div className='text-center text-muted '>
                      <div className='fs-6'>
                        Daha önceden kayıt olduysan hemen <p className='text-decoration-underline'>Oturum aç!</p>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div className='d-none d-lg-block col-md-8 col-lg-7 p-0'>
            <img src={registerImg} className='img-fluid w-100 ' style={{ objectFit: 'cover' }} alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
