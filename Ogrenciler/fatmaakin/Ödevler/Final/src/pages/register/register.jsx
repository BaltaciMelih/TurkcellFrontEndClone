import React from 'react'

import { useState, useNavigate } from 'react'

import logo from '../../image/register-banner.png'
import { useForm } from "react-hook-form";

const register = () => {
    const [name, namechange] = useState("");

    const [mail, mailchange] = useState("");

    const [date, datechange] = useState("");

    const [username, usernamechange] = useState("");

    const [phone, phonechange] = useState("");

    const [pass, passchange] = useState("");

    // const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handlesubmit = (e) => {

        e.preventDefault();

        // console.log({ name, email, username })

        const empdata = ({ name, mail, username, date, phone, pass })



        fetch("http://localhost:8000/users", {

            method: "POST",

            headers: { "content-type": "application/json" },

            body: JSON.stringify(empdata)



        }).then((res) => {

            alert('saved')

            // navigate('/')

        })

            .catch((err) => {

                console.log(err.console)

            })

    }
    return (
        <div className='d-flex flex-row'>

            <div className='col-lg-6 bg-black d-flex justify-content-center align-items-center container-fluid'>

                <form className='col-8' onSubmit={handlesubmit(onSubmit)}>

                    <div className='col' >

                        <input type=" text" className='form-control' placeholder='Name Surname'

                            value={name} onChange={e => namechange(e.target.value)}
                            {...register("name", { required: true, maxLength: 10 })}
                        />

                    </div>
                    {errors.name&& <p>Please check the first name</p>}
                    <div className='col' >


                        <input type=" text" className='form-control' placeholder='Usernamee'

                            value={username} onChange={e => usernamechange(e.target.value)}
                            {...register("username", { required: true, maxLength: 10 })}

                        />

                    </div>

                    <div className='col' >

                        <input type=" text" className='form-control' placeholder='Phone Number'

                            value={phone} onChange={e => phonechange(e.target.value)}

                        />

                    </div>

                    <div className='col' >

                        <input type=" text" className='form-control' placeholder='E-mail'

                            value={mail} onChange={e => mailchange(e.target.value)}
                            {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                        />

                    </div>
                    {errors.email && <p>Please check the Email</p>}
                    <div className='col' >

                        <input type=" text" className='form-control' placeholder='Date of Birth'

                            value={date} onChange={e => datechange(e.target.value)}

                        />

                    </div>

                    <div className='col' >

                        <input type=" text" className='form-control' placeholder='Password'

                            value={pass} onChange={e => passchange(e.target.value)}
                            {...register("password", {
                                required: true,
                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                            })}
                        />

                    </div>
                    {errors.password && <p>Please check the Password</p>}
                    <div className="col-lg-12">

                        <div className="form-group">

                            <button className='btn btn-success' type='submit'>Save</button>

                        </div>

                    </div>

                </form>

            </div>

            <div className='col-lg-6'>

                <img src={logo} alt="" className='container-fluid px-0' />

            </div>

        </div>




    )
}

export default register
