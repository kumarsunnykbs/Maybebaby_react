import { call, put, takeEvery } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import { postForgotPassRequestAPI, postLoginRequestAPI, postRegisterRequestAPI, postVerifyForgotPassRequestAPI, tokenVerifyRequestAPI, verifyAccountEmail } from "../../api/api";
import { FORGOT_PASSWORD_REQUEST, LOG_IN_REQUEST, REGISTER_REQUEST, USER_VERIFY_EMAIL_REQUEST, VERIFY_FORGOT_PASSWORD_REQUEST, VERIFY_TOKEN_REQUEST } from "../../Types";
import {
  forgotPasswordError,
  forgotPasswordSuccess,
  loginError,
  loginSuccess,
  registerError,
  registerSuccess,
  userVerifyEmailError,
  userVerifyEmailSuccess,
  verifyForgotPasswordError,
  verifyForgotPasswordSuccess,
  verifyTokenError,
  verifyTokenSuccess,
} from "./LoginAction";
import { BASE_URL } from "../../../uility/common";

function* loginHandler(data) {
  const response = yield call(postLoginRequestAPI, data.payload);

  if (response.error) {
    toast.error(response.msg, {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put(loginError({ ...response }));
  } else {
    toast.success("Login successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put(loginSuccess({ ...response }));
  }
}
function* registerHandler(data) {
  const response = yield call(postRegisterRequestAPI, data.payload);

  if (response.error) {
    toast.error(response.msg, {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put(registerError({ ...response }));
  } else {
    console.log("rrrrrrrrrrrrr",response);
    // let token = response.body[0].token
    toast.success("Registration Successful. Please Check Email To Verify Account.", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put(registerSuccess({ ...response }));
    // if(data.payload.withLogin === true){
    //   if(data.payload.subHading === "one_time"){
    //     OneTimePayement(token);
    //   }else if(data.payload.subHading === "monthly_plan"){
    //     SubscriptionHandler(true,token)
    //   }else{
    //     SubscriptionHandler(false,token)
    //   }
    // }else{
    //   toast.success("Registration Successful. Please Check Email To Verify Account.", {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    //   yield put(registerSuccess({ ...response }));
    // }
    
  }
}

function* verifyEmailHandler(data) {
  const response = yield call(verifyAccountEmail, data.payload);

  if (response.error) {
    toast.error(response.msg, {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put(userVerifyEmailError({ ...response }));
  } else {
    toast.success("Email Verified Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put(userVerifyEmailSuccess({ ...response }));
  }
}

function* forgotPasswordHandler(data) {
  const response = yield call(postForgotPassRequestAPI, data.payload);

  if (response.error) {
    toast.error(response.msg, {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put(forgotPasswordError({ ...response }));
  } else {
    toast.success(response.msg, {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put(forgotPasswordSuccess({ ...response }));
  }
}

function* verifyForgotPasswordHandler(data) {
  const response = yield call(postVerifyForgotPassRequestAPI, data.payload);

  if (response.error) {
    toast.error(response.msg, {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put(verifyForgotPasswordError({ ...response }));
  } else {
    toast.success(response.msg, {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put(verifyForgotPasswordSuccess({ ...response }));
  }
}

function* verifyTokenHandler(data) {
  const response = yield call(tokenVerifyRequestAPI, data.payload);

  if (response.error) {
    toast.error("Access expired. Please login again.", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put(verifyTokenError({ ...response }));
  } else {
    
    yield put(verifyTokenSuccess({ ...response }));
  }
}

const OneTimePayement = async (token) => {
  const obj = {
    "line_items": [
      {
        "price": "price_1MyyaDBj65z3fD8N5fRcJKIK",
        "quantity": 1
      }
    ],
    "add_on": false
  }
  try {
    const response1 = await fetch(`${BASE_URL}/oneTimePayment`, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    });
    const data = await response1.json();
    console.log("data", data)
    if (data && data.body && data.body.url) {
      localStorage.setItem('paymentId', data.body.id)
      localStorage.setItem('regToken', token);
      window.location.href = data.body.url;
    }
  } catch (err) {
    console.log("errrr", err)
  }

}

 const SubscriptionHandler = async (isMonthly = false,token) => {
  let payload = {
    "line_items": [
      {
        // "price": "price_1MZyP4Bj65z3fD8NFJFqIYSC",
        "price": isMonthly ? "price_1MyyadBj65z3fD8N7nyEtAz2" : "price_1MyyasBj65z3fD8NrBIwE2Nl",
        "quantity": 1
      }
    ],
    "isMonthly": isMonthly ? "1" : "0"
  }
  try {
    const response = await fetch(`${BASE_URL}/subScriptionPayment`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log("data", data)
    if (data && data.body && data.body.url) {
      localStorage.setItem('paymentId', data.body.id)
      localStorage.setItem('regToken', token);
      window.location.href = data.body.url;
    }
  } catch (err) {
    console.log("errrr", err)
  }


}



function* loginSagaFun() {
  yield takeEvery(LOG_IN_REQUEST, loginHandler);
  yield takeEvery(FORGOT_PASSWORD_REQUEST, forgotPasswordHandler)
  yield takeEvery(VERIFY_FORGOT_PASSWORD_REQUEST, verifyForgotPasswordHandler)
  yield takeEvery(REGISTER_REQUEST, registerHandler);
  yield takeEvery(USER_VERIFY_EMAIL_REQUEST, verifyEmailHandler);
  yield takeEvery(VERIFY_TOKEN_REQUEST, verifyTokenHandler);
}
export default loginSagaFun;
