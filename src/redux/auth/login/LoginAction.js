import { FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_RESET, FORGOT_PASSWORD_SUCCESS, LOGOUT, LOG_IN_ERROR, LOG_IN_REQUEST, LOG_IN_SUCCESS, REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS, USER_VERIFY_EMAIL_ERROR, USER_VERIFY_EMAIL_REQUEST, USER_VERIFY_EMAIL_SUCCESS, VERIFY_FORGOT_PASSWORD_ERROR, VERIFY_FORGOT_PASSWORD_REQUEST, VERIFY_FORGOT_PASSWORD_SUCCESS, VERIFY_TOKEN_ERROR, VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_SUCCESS } from "../../Types"


export const loginRequest = (payload)=>{
    return{
        type: LOG_IN_REQUEST,
        payload
    }
}
export const loginSuccess = (payload)=>{
    return{
        type: LOG_IN_SUCCESS,
        payload
    }
}
export const loginError = (payload)=>{
    return{
        type: LOG_IN_ERROR,
        payload
    }
}

export const registerRequest = (payload)=>{
    return{
        type: REGISTER_REQUEST,
        payload
    }
}
export const registerSuccess = (payload)=>{
    return{
        type: REGISTER_SUCCESS,
        payload
    }
}
export const registerError = (payload)=>{
    return{
        type: REGISTER_ERROR,
        payload
    }
}

export const logout = (payload) => {
    return{
        type: LOGOUT,
        payload
    }
}

export const userVerifyEmailRequest = (payload) => {
    return {
        type: USER_VERIFY_EMAIL_REQUEST,
        payload
    }
}

export const userVerifyEmailSuccess = (payload) => {
    return {
        type: USER_VERIFY_EMAIL_SUCCESS,
        payload
    }
}

export const userVerifyEmailError = (payload) => {
    return {
        type: USER_VERIFY_EMAIL_ERROR,
        payload
    }
}


export const forgotPasswordRequest = (payload)=>{
    return{
        type: FORGOT_PASSWORD_REQUEST,
        payload
    }
}
export const forgotPasswordSuccess = (payload)=>{
    return{
        type: FORGOT_PASSWORD_SUCCESS,
        payload
    }
}
export const forgotPasswordError = (payload)=>{
    return{
        type: FORGOT_PASSWORD_ERROR,
        payload
    }
}

export const forgotPasswordReset = ()=>{
    return{
        type: FORGOT_PASSWORD_RESET,
    }
}

export const verifyForgotPasswordRequest = (payload)=>{
    return{
        type: VERIFY_FORGOT_PASSWORD_REQUEST,
        payload
    }
}
export const verifyForgotPasswordSuccess = (payload)=>{
    return{
        type: VERIFY_FORGOT_PASSWORD_SUCCESS,
        payload
    }
}
export const verifyForgotPasswordError = (payload)=>{
    return{
        type: VERIFY_FORGOT_PASSWORD_ERROR,
        payload
    }
}


export const verifyTokenRequest = (payload)=>{
    return{
        type: VERIFY_TOKEN_REQUEST,
        payload
    }
}
export const verifyTokenSuccess = (payload)=>{
    return{
        type: VERIFY_TOKEN_SUCCESS,
        payload
    }
}
export const verifyTokenError = (payload)=>{
    return{
        type: VERIFY_TOKEN_ERROR,
        payload
    }
}
