import React, { useEffect, useState } from "react";
import Logo from "../../asset/image/logo-2.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/auth/login/LoginAction";
import Loader from "../../components/Loader";
import { getActivePlanRequest } from "../../redux/plan/actions";
import ring from "../../asset/image/ring-1.png"
import ring1 from "../../asset/image/ring-2.png"
import ring2 from "../../asset/image/common-heading.png"

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const {token, loading, isSubscriptionActive, isLogin } = useSelector((store) => store.auth);
  useEffect(() => {
    if(isSubscriptionActive && token && isLogin){
      navigate('/home')
    }
    else if(token && !isSubscriptionActive) {
        navigate('/subscription')
    }

  }, [token, isLogin])
  
  const LoginHandler = (e) => {
    e.preventDefault();
    let obj = {
      email: email,
      password: password,
    };
    const error = validate(obj)

    setErrorMessage(validate(obj));

    if (Object.keys(error).length > 0) {

      return
    }
    if (Object.keys(error).length === 0) {     
    dispatch(loginRequest(obj));
  };
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
      <div className="login-2">
        <img className="ellipse1" src={ring} />
        <img className="ellipse2" src={ring1} />
        <div className="container">
          <div className="row login-box">
            <div className="col-lg-6 col-md-12 bg-img">
              <div className="info">
                <div className="info-text">
                  <p className="wel-pp">WELCOME TO MAYBEBABY</p>
                  <img className="ring2" src={ring2} />
                  <p>
                    Welcome to our AI-powered image prediction app login page! Get ready to discover what your future child could look like by simply uploading photos of you and your partner. Our advanced algorithms will generate a realistic image prediction in just a few moments.
                  </p>
                  {/* <div className="social-buttons">
                    <a
                      href="#"
                      className="social-button social-button-facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-button social-button-twitter">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="social-button social-button-google">
                      <i className="fa-brands fa-google"></i>
                    </a>
                    <a
                      href="#"
                      className="social-button social-button-linkedin"
                    >
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
                <h3>Sign Into Your Account</h3>
                <div className="login-inner-form">
                  <form action="#" method="GET">
                    <div className="form-group form-box">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                      <p className='error'>{errorMessage.email}</p >
                    </div>
                    <div className="form-group form-box">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                        placeholder="Password"
                        aria-label="Password"
                      />
                      <p className='error'>{errorMessage.password}</p >
                    </div>
                    <div className="checkbox form-group form-box">
                      <div className="form-check checkbox-theme">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                           Remember me
                        </label>
                      </div>
                      <Link to="/forgotPassword">Forgot Password</Link>
                    </div>
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        onClick={LoginHandler}
                        className="btn-md btn-theme w-100 button-27"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text">
                      Don't have an account ? <Link to="/register">Register here</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader/>}
    </div>
  );
};

export default Login;
