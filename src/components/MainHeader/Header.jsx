import React, { useState } from "react";
import Logo from "../../asset/image/logo-2.png";
import tog from "../../asset/image/closebt.png";
import togg from "../../asset/image/togg.png";
import ct from "../../asset/image/ct.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isToggled, setIsToggled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    console.log("safrfwa");
    setActiveLink(link);
  };

  const actieveHome =
    location.pathname.includes("about_us") ||
    location.pathname.includes("blogs") ||
    location.pathname.includes("register");

  return (
    <>
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="flex-header">
                <div className="flex-header-1">
                  <img className="logo-2" src={Logo} alt="ww" />
                </div>
                <div
                  className={isToggled ? "flex-header-2 open" : "flex-header-2"}
                >
                  <div className="flx-dv">
                  <img className="log0sidebar" src={Logo} alt="" />
                  <button
                    className="bt-close" onClick={() => setIsToggled(false)}>
                    <img src={ct} alt="tog" />
                  </button> 
                  </div>
                  <ul className="ui-nav">
                    <li>
                      <Link
                        className={
                          !actieveHome ? "active" : ""
                        }
                        to={"/"}
                        onClick={() => handleClick("home")}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          location.pathname.includes("about_us") ? "active" : ""
                        }
                        to={"/about_us"}
                        onClick={() => handleClick("about")}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          location.pathname.includes("blogs")
                            ? "active"
                            : ""
                        }
                        to={"/blogs"}
                        onClick={() => handleClick("blogs")}
                      >
                        Blogs
                      </Link>
                    </li>
                    {/* <li>
                      <Link to={"/privacy_policy"}>Privacy Policy</Link>
                    </li> */}

                    <li>
                      <Link
                        className={
                          location.pathname.includes("register") ? "active" : ""
                        }
                        to={"/register"}
                        onClick={() => handleClick("register")}
                      >
                        Sign Up
                      </Link>
                    </li>
                    <li className="login-bt-1">
                      <Link to={"/login"}>Login</Link>
                    </li>
                  </ul>
                </div>

                <div className="togg-bt">
                  <img src={togg} className="tog-but" alt="" onClick={() => setIsToggled(true)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
