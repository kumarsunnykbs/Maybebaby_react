import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import './ForgotPassword.css'
import { useDispatch, useSelector } from 'react-redux';
import { verifyForgotPasswordRequest } from '../../redux/auth/login/LoginAction';
import { useNavigate } from 'react-router-dom';

const ForgotPassModal = (props) => {
 const {isModalOpen,setIsModalOpen}=props;
 const authState = useSelector(state => state.auth);
 const [obj,setObj]=useState({
  password: "",
  confirmPassword: "",
  otp: "",
  passwordTouch: false,
  confirmPasswordTouch: false,
  otpTouch: false,
  passwordError: false,
  confirmPasswordError: false,
  otpError: false,
 });
 
 const [errorMessage, setErrorMessage] = useState({});
 const dispatch = useDispatch();
 const navigation = useNavigate();

 useEffect(() => {
    if (authState.forgetPasswordResult) {
      setIsModalOpen(false);
      navigation('/login');
    }
  
 }, [authState.forgetPasswordResult])

 
 const onChangeHandler =(e)=>{
  const {name,value}=e.target;
  setObj((prev)=>{
    return {...prev,[name]:value}
  })
 }



  const handleOk = () => {
    // setIsModalOpen(false);
    const error = validate(obj)

    setErrorMessage(validate(obj));

    if (Object.keys(error).length > 0) {

      return
    }
    if (Object.keys(error).length === 0) {
      if (props.email && obj.otp && obj.password && obj.confirmPassword && obj.password === obj.confirmPassword) {
        const postData = {
          email: props.email,
          otp: obj.otp,
          password: obj.password,
          confirmPassword: obj.confirmPassword,
        }
        dispatch(verifyForgotPasswordRequest(postData));
      }

    }
    
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const validate = (values) => {
    const errors = {};
    const pws = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{4,10}$/i;

  if (!values.otp) {
      errors.otp = "OTP is required!";
    } else if (values.otp.length < 6 || values.otp.length > 6) {
      errors.otp = "OTP length should be 6 digits";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 7 characters";
    } 
    else if (!pws.test(values.password)) {
      errors.password = "Must contain one number,one Uppercase letter,one lowercase leter,One Special Character";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "confirmPassword is required";
    }else if(values.password !== values.confirmPassword){
      errors.confirmPassword = "Confirm Password is should be same as password";
    }
    return errors;
  };


  return (
    <>
     
      <Modal title="OTP is sent your email address" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className='row'>
        <div className='col-md-12 mb-2'>
          <label> Enter OTP </label>
          <input min={6} max={6} className='form-control'  name="otp" onChange={onChangeHandler} value={obj.otp} type="number"  />
        </div>
        <p className='error'>{errorMessage.otp}</p >
        <div className='col-md-12 mb-2'>
          <label> New Password </label>
          <input className='form-control'  name="password" onChange={onChangeHandler} value={obj.password} type="password"/>
        </div>
        <p className='error'>{errorMessage.password}</p >
        <div className='col-md-12 mb-2'>
          <label> Confirm Password </label>
          <input className='form-control' name="confirmPassword" onChange={onChangeHandler} value={obj.confirmPassword} type="password"/>
        </div>
        <p className='error'>{errorMessage.confirmPassword}</p >
      </div>
      </Modal>
    </>
  );
};

export default ForgotPassModal;