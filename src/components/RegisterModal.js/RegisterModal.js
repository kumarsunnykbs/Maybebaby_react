import React, { useState } from 'react'
import './RegisterModal.css'
import Logo from '../../asset/image/logo-2.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerRequest } from '../../redux/auth/login/LoginAction'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'



const RegisterModal = ({subHading, handleCloseModal}) => {
    const [objReg, setObjReg] = useState({
        email: "",
        username: "",
        password: ""
    })
    const [checked, setChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const RegisterHandler = (e) => {
        e.preventDefault();

        const error = validate(objReg)

        setErrorMessage(validate(objReg));

        if (Object.keys(error).length > 0) {

            return
        }
        if (Object.keys(error).length === 0) {
            const payload = {
                ...objReg,
                subHading: subHading, // Include the subHading value in the payload
                withLogin : true
              };
            if (checked) {
                dispatch(registerRequest(payload));
                setObjReg({
                    email: "",
                    username: "",
                    password: ""
                })
                handleCloseModal();
            } else {
                toast.warning("please First checkin check box", {
                    position: toast.POSITION.TOP_LEFT,
                });
            }

        }
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setObjReg((prev) => {
            return { ...prev, [name]: value }
        })


    }
    const validate = (values) => {
        const errors = {};
        const pws = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{4,64}$/i;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // const user = /^[A-Za-z][A-Za-z0-9_]{7,29}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.username) {
            errors.username = "Username is required!";
        } else if (values.username.length < 4) {
            errors.username = "Username must be more than 4 characters or equal!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 7 characters";
        }
        else if (!pws.test(values.password)) {
            errors.password = "Must contain one number,one Uppercase letter,one lowercase leter,One Special Character";
        }

        return errors;
    };

    return (
        <div>
            {/* <h1> subHading={subHading}</h1> */}
            <div className="login-2">
                <div className="container">
                    <div className="row login-box">
                       
                        <div className="col-lg-12 col-md-12 form-infoModal">
                            <div className="form-section">
                                <div className="logo clearfix">
                                    <a href="#">
                                        <img src={Logo} alt="logo" />
                                    </a>
                                </div>
                                <h3>Create An Account</h3>
                                <div className="login-inner-form">
                                    <form action="#" method="GET">
                                        <div className="form-group form-box">
                                            <input type="username" name="username" className="form-control" autoComplete="off" placeholder="Username" aria-label="Username" value={objReg.username} onChange={onChangeHandler} />
                                            <p className='error'>{errorMessage.username}</p >
                                        </div>

                                        <div className="form-group form-box">
                                            <input type="email" name="email" className="form-control" autoComplete="off" placeholder="Email Address" aria-label="Email Address" value={objReg.email} onChange={onChangeHandler} />
                                            <p className='error'>{errorMessage.email}</p >
                                        </div>

                                        <div className="form-group form-box">
                                            <input type="password" name="password" className="form-control" autoComplete="off" placeholder="Password" aria-label="Password" value={objReg.password} onChange={onChangeHandler} />
                                            <p className='error'>{errorMessage.password}</p >
                                        </div>

                                        <div className="checkbox form-group form-box">
                                            <div className="form-check checkbox-theme">
                                                <input className="form-check-input" type="checkbox" checked={checked} onChange={() => setChecked(prev => !prev)} id="rememberMe" />
                                                <label className="form-check-label" for="rememberMe"> I agree to the terms of service</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0">
                                            <button type="submit" className="btn-md btn-theme w-100 button-27" onClick={RegisterHandler}>Register</button>
                                        </div>
                                        <p className="text">Already a member ? <Link to="/Login">Login here</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {authState.loading && <Loader />}
        </div>
    )
}

export default RegisterModal