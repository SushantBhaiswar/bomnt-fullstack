import { useState } from "react";
import "./login.css";
import useFormikHandler from "../../validation/formikInstance";
import loginValidation from "./login.validation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../components/redux/store";
import { useSelector } from 'react-redux';

export default function Login() {
    // const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated)
    const navigate = useNavigate()
    const inaitialState = {
        email: null,
        password: null,
        showPassword: false,
        isAuthenticated: false
    }
    const dispatch = useDispatch()
    const handleLogin = async (values) => {
        console.log("values", values)
        dispatch(login({ user: values }))       
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('user', JSON.stringify(values));
        navigate('/')
    }
    const formikInstance = useFormikHandler(inaitialState, loginValidation, handleLogin)

    console.log("formikInstance", formikInstance)
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = (e) => {
        setShowPassword(!showPassword)
    }

    return (
        <form onSubmit={formikInstance.handleSubmit}>

            <div className='main'>

                <div className='box'>
                    <div className="logintext">

                        <h1>Sign In</h1>
                    </div>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: 'blueviolet' }}>Email</label>
                            <input type="email"  {...formikInstance.getFieldProps('email')} name="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email address here" />
                            {formikInstance.touched.email && formikInstance.errors.email ? (
                                <div style={{ color: 'red', height: '4px' }}>{formikInstance.errors.email}</div>
                            ) : null}
                        </div>
                        <label for="inputPassword5" class="form-label" style={{ color: 'blueviolet' }}>Password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="inputPassword5"
                                className="form-control"
                                aria-describedby="passwordHelpBlock"
                                {...formikInstance.getFieldProps('password')}
                                placeholder="Enter your password here"
                            />
                            <button
                                type="button"
                                className="toggle-password-btn"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {formikInstance.touched.password && formikInstance.errors.password && (
                            < div style={{ color: 'red', height: '5px' }}>{formikInstance.errors.password}</div>
                        )}
                        <div style={{ color: 'blueviolet', 'margin-top': '15px', height: '15px' }}>Forgot Password ?</div>
                    </div>
                    <div className="signin_button" style={{ 'margin-top': !formikInstance?.touched?.password ? '20px' : '' }}>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="submit">SIGN IN</button>
                        </div>
                    </div>
                    <div className="signup_button">

                        <p style={{ marginLeft: '5px', }}>Sign up</p>
                        <p style={{ marginLeft: '5px', }} onClick={() => navigate('/')}> Guest User </p >

                    </div>

                </div>
            </div>
        </form >
    );
}
