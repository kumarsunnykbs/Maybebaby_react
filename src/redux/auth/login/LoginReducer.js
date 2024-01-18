import { getToken } from "../../../uility/common";
import { FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_RESET, FORGOT_PASSWORD_SUCCESS, LOGOUT, LOG_IN_ERROR, LOG_IN_REQUEST, LOG_IN_SUCCESS, REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS, USER_VERIFY_EMAIL_ERROR, USER_VERIFY_EMAIL_REQUEST, USER_VERIFY_EMAIL_SUCCESS, VERIFY_FORGOT_PASSWORD_ERROR, VERIFY_FORGOT_PASSWORD_REQUEST, VERIFY_FORGOT_PASSWORD_SUCCESS, VERIFY_TOKEN_ERROR, VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_SUCCESS } from "../../Types";


const initialState = {
  
    loading: false,
    token: getToken() || '',
    isEmailVerified: null,
    emailVerifiedMsg: '',
    forgetPasswordResponse: null,
    forgetPasswordResult: null,
    isSubscriptionActive: 0,
    isLogin: getToken() ? true : false
}

const loginHandler = (state = initialState, action) => {

    switch (action.type) {

        case LOG_IN_REQUEST:
            return { ...state, loading: true }
        case LOG_IN_SUCCESS:
            console.log("action", action.payload.body);
            return { ...state, token: action.payload.body.token, isLogin: true, loading: false, isSubscriptionActive: action.payload.body.isSubscriptionActive }
        case LOG_IN_ERROR:
            return { ...state, loading: false, isLogin: false }

        case REGISTER_REQUEST:
            return { ...state, loading: true }
        case REGISTER_SUCCESS:
            console.log("action register", action.payload.body);
            return { ...state, loading: false }
        case REGISTER_ERROR:
            return { ...state, loading: false }

        case USER_VERIFY_EMAIL_REQUEST:
            return { ...state, loading: true, isEmailVerified: null, emailVerifiedMsg: '' };
        case USER_VERIFY_EMAIL_SUCCESS:
            return { ...state, loading: false, isEmailVerified: true, emailVerifiedMsg: action.payload.msg };
        case USER_VERIFY_EMAIL_ERROR:
            return { ...state, loading: false, isEmailVerified: false, emailVerifiedMsg: action.payload.msg };

        case FORGOT_PASSWORD_REQUEST:
            return { ...state, loading: true, forgetPasswordResponse: null }
        case FORGOT_PASSWORD_SUCCESS:
            return { ...state, loading: false, forgetPasswordResponse: true }
        case FORGOT_PASSWORD_ERROR:
            return { ...state, loading: false, forgetPasswordResponse: false }
        case FORGOT_PASSWORD_RESET:
            return { ...state, forgetPasswordResponse: null }

        case VERIFY_FORGOT_PASSWORD_REQUEST:
            return { ...state, loading: false }
        case VERIFY_FORGOT_PASSWORD_SUCCESS:
            return { ...state, loading: false, forgetPasswordResult: true }
        case VERIFY_FORGOT_PASSWORD_ERROR:
            return { ...state, forgetPasswordResult: false }

        case VERIFY_TOKEN_REQUEST:
            return { ...state, loading: false }
        case VERIFY_TOKEN_SUCCESS:
            return { ...state, loading: false }
        case VERIFY_TOKEN_ERROR:
            return { ...state, token: "", isLogin: false }

        case LOGOUT:
            return { ...state, loading: false, token: '', isLogin: false }

        default:
            return { ...state }
    }

}
export default loginHandler;