import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "../mix.css"
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import { SERVER_URI } from "../config/keys"
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/store';
import { useSelector } from 'react-redux';

export default function Login() {
    const { user, isAuthenticated } = useSelector((state) => state)
    const dispatch = useDispatch()
    const handleLogin = (data) => {
        data.user.role = 'auther'
        if (data.Message == 'User LoggedIn') data.usrole = 'user'
        dispatch(login(data))
    }
    const heading = useLocation()
    const redirect = useNavigate()
    const [showpass, setShowpass] = useState(false)
    const [inp, setInp] = useState({
        email: "",
        password: ""
    })
    // console.log(heading.state.heading);
    const changeinp = (e) => {
        let { name, value } = e.target
        setInp({ ...inp, [name]: value })
    }
    const onlogin = async (e) => {
        e.preventDefault()
        let { email, password } = inp
        if (email === "") {
            toast.error("email is required!", {
                position: "top-right"
            });
        }
        else if (password === "") {
            toast.error("password is required!", {
                position: "top-right"
            });
        }
        else {
            if (heading.state.heading === "User") {
                await axios.post(`${SERVER_URI}/user-login`, inp)
                    // await axios.post("http://localhost:3001/user-login", inp)
                    .then((res) => {
                        if (res.status === 200) {
                            handleLogin(res.data)


                            console.log("s", res.data.user);
                            localStorage.setItem("token", res.data.data)
                            localStorage.setItem("isAuthenticated", true)
                            localStorage.setItem("user", JSON.stringify(res.data.user))
                            redirect("/")
                        }
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message, {
                            position: "top-right"
                        })
                    })
            }
            else if (heading.state.heading === "Author") {

                await axios.post(`${SERVER_URI}/author-login`, inp)
                    // await axios.post("http://localhost:3001/author-login", inp)
                    .then((res) => {

                        if (res.status === 200) {
                            handleLogin(res.data)

                            toast.success("Author Login successfull !", {
                                position: "top-right"
                            });


                            localStorage.setItem("token", res.data.data)
                            localStorage.setItem("isAuthenticated", true)
                            localStorage.setItem("user", res.data.user)
                            redirect("/")
                        }
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message, {
                            position: "top-right"
                        })
                    })
            }
        }
    }

    return (
        <div className='login-page'>
            <section>
                <div className="form_datalogin">
                    <div className="form_heading">
                        <h1 style={{ color: "white" }}>{heading.state.heading} Log In</h1>
                        <p style={{ color: "white" }}>Hi, we are glad you back. Please login.</p>
                    </div>
                    <form >
                        <div className="form_input">
                            <label htmlFor="email" style={{ color: "white" }}>Email</label>
                            <input type="email" name="email" id='email'
                                value={inp.email}
                                onChange={changeinp}
                                placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password" style={{ color: "white" }}>Password</label>
                            <div className="two">
                                <input type={!showpass ? "password" : "text"}
                                    name="password" id='password'
                                    value={inp.password}
                                    onChange={changeinp}
                                    placeholder='Enter Your Password' />
                                <div className="showpass" onClick={() => {
                                    setShowpass(!showpass)
                                }}>{(!showpass) ? "Show" : "Hide"}</div>

                            </div>
                        </div>
                        <button className="btn" onClick={onlogin} >Login</button>

                        <p style={{ color: "white" }} onClick={() => {
                            redirect("/register", { state: { heading: "User" } })
                        }}>Don't have an accout? Sign Up</p>

                    </form>
                </div>
            </section >
            <ToastContainer position='top-right' />

        </div >
    )
}
