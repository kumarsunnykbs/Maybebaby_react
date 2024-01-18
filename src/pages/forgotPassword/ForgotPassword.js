import React, { useEffect, useState } from 'react'
import Logo from '../../asset/image/logo-2.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPasswordRequest, forgotPasswordReset } from '../../redux/auth/login/LoginAction'
import ForgotPassModal from './FortogPassModal'
import ring2 from "../../asset/image/common-heading.png"
import ring from "../../asset/image/ring-1.png"
import ring1 from "../../asset/image/ring-2.png"

const ForgotPassword = () => {
    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEmailTouch, setIsEmailTouch] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    useEffect(() => {
        if (authState.forgetPasswordResponse) {
            setIsModalOpen(true)
            forgotPasswordReset()
        }
    }, [authState.forgetPasswordResponse])

    const forgotPassHandler = (e) => {
        e.preventDefault();
        if (isEmailValid && email.trim()) {
            dispatch(forgotPasswordRequest({ email }))
        }
    }
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <div>
            <div className="login-2">
            <img className="ellipse1" src={ring} />
        <img className="ellipse2" src={ring1} />
                <div className="container">
                    <ForgotPassModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} email={email} />
                    <div className="row login-box">
                        <div className="col-lg-6 col-md-12 bg-img">
                            <div className="info">
                                <div className="info-text">
                                    {/* <div className="waviy">
                                        <span style={{ "--i": "1" }}>w</span>
                                        <span style={{ "--i": "2" }}>e</span>
                                        <span style={{ "--i": "3" }}>l</span>
                                        <span>c</span>
                                        <span style={{ "--i": "5" }}>o</span>
                                        <span style={{ "--i": "6" }}>m</span>
                                        <span style={{ "--i": "7" }}>e</span>
                                        <span className="color-yellow" style={{ "--i": "8", marginLeft: "15px" }}>
                                            t
                                        </span>
                                        <span className="color-yellow" style={{ "--i": "9", marginRight: "15px" }}>
                                            o
                                        </span>
                                        <span style={{ "--i": "11" }}>m</span>
                                        <span style={{ "--i": "12" }}>a</span>
                                        <span style={{ "--i": "13" }}>y</span>
                                        <span style={{ "--i": "14" }}>b</span>
                                        <span style={{ "--i": "15" }}>e</span>
                                        <span style={{ "--i": "16" }}>b</span>
                                        <span style={{ "--i": "17" }}>a</span>
                                        <span style={{ "--i": "18" }}>b</span>
                                        <span style={{ "--i": "19" }}>y</span>
                                    </div> */}
                                    <p className="wel-pp">WELCOME TO MAYBEBABY</p>
                                    <img className="ring2" src={ring2} />
                                    <p>Welcome to our AI-powered image prediction app login page! Get ready to discover what your future child could look like by simply uploading photos of you and your partner. Our advanced algorithms will generate a realistic image prediction in just a few moments.</p>
                                    {/* <div className="social-buttons">
                                        <a href="#" className="social-button social-button-facebook">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="social-button social-button-twitter">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="#" className="social-button social-button-google">
                                            <i className="fa-brands fa-google"></i>
                                        </a>
                                        <a href="#" className="social-button social-button-linkedin">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 form-info">
                            <div className="form-section">
                                <div className="logo clearfix">
                                    <a href="#">
                                        <img src={Logo} alt="logo" />
                                    </a>
                                </div>
                                <h3>Recover Your Password</h3>
                                <div className="login-inner-form">
                                    <form action="#" method="GET">
                                        <div className="form-group form-box">
                                            <input type="email" name="email" className="form-control" placeholder="Email Address" aria-label="Email Address" value={email} onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (!validateEmail(e.target.value)) {
                                                    if (isEmailValid) {
                                                        setIsEmailValid(false);
                                                    }
                                                } else {
                                                    if (!isEmailValid) {
                                                        setIsEmailValid(true);
                                                    }
                                                }
                                            }} onBlur={() => {
                                                setIsEmailTouch(true);
                                            }} />
                                            {email.length === 0 && isEmailTouch && <span className='text-danger d-flex' style={{ marginLeft: '14px' }}>Email is mandatory field</span>}
                                            {isEmailTouch && email.length !== 0 && !isEmailValid && <span className='text-danger d-flex' style={{ marginLeft: '14px' }}>Please enter valid email address</span>}
                                        </div>
                                        <div className="form-group mb-0">
                                            <button type="submit" className="btn-md btn-theme w-100 button-27" onClick={forgotPassHandler}>Send Email</button>
                                        </div>
                                        <p className="text">Already a member ? <Link to="/login"> Login here</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword