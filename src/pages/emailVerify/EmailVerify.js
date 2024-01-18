import React, { useEffect, useState } from 'react'
import './EmailVerify.css'
import successIcon from '../../asset/image/checked.png'
import cancelIcon from '../../asset/image/cancel.png'
import waitIcon from '../../asset/image/wait.png'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userVerifyEmailRequest } from '../../redux/auth/login/LoginAction'
import Loader from '../../components/Loader'
let isRequestSend = false;
const EmailVerify = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  console.log("location",location,authState)
  useEffect(() => {
    if (location.search && !isRequestSend) {
      isRequestSend = true;
      const activationCode = location.search.split("=")[1];
      console.log("activationCode",activationCode)
      dispatch(userVerifyEmailRequest({activationCode}));
    }
  }, [])

  return (
    <div className="emailveryfy">
    <div className='center-db'>
        {authState.isEmailVerified === null && <EmailVerificationTemplate
          text="Your email verification request  is processing. Please wait"
          isRequest= {null}
          imgSrc={waitIcon}
        />}
        {authState.isEmailVerified === true && <EmailVerificationTemplate
          text={authState.emailVerifiedMsg}
          isRequest= {false}
          imgSrc={successIcon}
        />}
        {authState.isEmailVerified === false && <EmailVerificationTemplate
          text={authState.emailVerifiedMsg}
          isRequest= {false}
          imgSrc={cancelIcon}
        />}
    </div>
    {authState.loading && <Loader/>}
</div>
  )
}

export default EmailVerify

const EmailVerificationTemplate = ({ text, imgSrc, isRequest  }) => {
  return <div className='dummy-img' style={{ textAlign: 'center' }}>
    <img src={imgSrc}  alt ="icon"/>
    <div className="email_heading">
        <p>{text}</p>
        {isRequest ? null : <div>
          <Link to='/login' className='logintxt'>click here</Link> Now To Login
        </div>}
    </div>
  </div>
}