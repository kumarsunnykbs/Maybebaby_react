import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../asset/image/logo-2.png";
import tog from "../../asset/image/closebt.png";
import { logout, verifyTokenRequest } from "../../redux/auth/login/LoginAction";
import { getActivePlanRequest } from "../../redux/plan/actions";
import { removeToken, removeUserInfo } from "../../uility/common";
import NavButton from "../Buttons/NavButton";
import { clearData } from "../../redux/familyData/Action";
import ct from "../../asset/image/ct.png";

function MainHeader() {
  const [isToggled, setIsToggled] = useState(false);
  
  const { token, isLogin, isSubscriptionActive } = useSelector(
    (store) => store.auth
  );

  const location = useLocation()
  const [isToggled1, setIsToggled1] = useState(false);
  const [activeButton, setActiveButton] = useState(1); // Set the initial active button index
  const planState = useSelector((state) => state.plan);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const homeRedirect = () => {
    navigate("/home");
    setIsToggled(false);
  };

  const logoutHandler = () => {
    dispatch(clearData(null));
    dispatch(logout());
    removeToken();
    removeUserInfo();
  };

  const FamilyHistoryRoute = () => {
    navigate("/familyHistory");
    setIsToggled(false);
  };

  useEffect(() => {
    if (token && isLogin) {
      console.log("innnnnnnnnn");
      dispatch(verifyTokenRequest());
      dispatch(getActivePlanRequest());
    } else if (!token && !isLogin) {
      navigate("/login");
    }
  }, [token, planState.refreshHitLimit]);

  return (
    <div>
      <section className="top-header  main-only">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="flex-header">
                <div className="flex-header-1">
                  <img className="logo-2" src={logo} alt="" />
                </div>
                <div
                  className={isToggled1 ? "flex-header-2 open" : "flex-header-2"}
                >
                   <img className="log0sidebar" src={logo} alt="" />
                  <button
                    className="bt-close"
                    onClick={() => setIsToggled1(false)}
                  >
                      <img src={ct} alt="tog" />
                  </button>
                  {!isSubscriptionActive && (
                    <NavButton
                      key="nav-button-1"
                      clickFun={homeRedirect}
                      name="Dashboard"
                      isActive={location.pathname.includes("home")}
                      setActiveButton={() => setActiveButton(1)}
                      isLast={false} // Not the last button
                    />
                  )}
                  <NavButton
                    key="nav-button-2"
                    clickFun={FamilyHistoryRoute}
                    name="Image Results"
                    isActive={location.pathname.includes("familyHistory")}
                    setActiveButton={() => setActiveButton(2)}
                    isLast={false} // Not the last button
                  />
                  <NavButton
                    key="nav-button-3"
                    clickFun={logoutHandler}
                    name="Logout"
                    className="logout"
                    isActive={activeButton === 3}
                    setActiveButton={() => setActiveButton(3)}
                    isLast={true} // Not the last button
                  />
                </div>
                <div className="togg-bt">
                  <button
                    className="tog-bt-1"
                    onClick={() => setIsToggled1(true)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainHeader;
