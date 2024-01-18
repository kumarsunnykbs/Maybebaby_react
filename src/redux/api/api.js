import axios from "axios";
import { BASE_URL, getToken, origin, removeToken, removeUserInfo, setToken, setUserInfo } from "../../uility/common";

export const postLoginRequestAPI = async (payload) => {
  console.log("payload", payload);
  const param = {
    ...payload,
  };
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    origin,
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      param,
      requestOptions
    );
    if (response.data.error) {
      return { ...response.data, error: true };
    } else {
      setToken(response.data.body.token);
      setUserInfo(response.data.body);
      return { ...response.data, error: false };
    }
  } catch (err) {
    console.log("err", err.message);
  }
};

// export const postRegisterRequestAPI = async (payload) => {
//   console.log("payload", payload);
//   const param = {
//     ...payload,
//   };
//   const requestOptions = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     origin,
//   };
//   try {
//     const response = await axios.post(
//       `${BASE_URL}/register`,
//       param,
//       requestOptions
//     );
//     if (response.data.error) {
//       return { msg: response.data.msg, error: true };
//     } else {

//     // code  by me
// if(response.data.body.token){
//   const obj = {
//     "line_items": [
//       {
//         "price": "price_1MyyaDBj65z3fD8N5fRcJKIK",
//         "quantity": 1
//       }
//     ],
//     "add_on": false
//   }
//   try {
//     const response1 = await fetch(`${BASE_URL}/oneTimePayment`, {
//       method: 'POST',
//       body: JSON.stringify(obj),
//       headers: {
//         'Authorization': getToken(),
//         'Content-Type': 'application/json'
//       }
//     });
//     const data = await response1.json();
//     console.log("data", data)
//     if (data && data.body && data.body.url) {
//       localStorage.setItem('paymentId', data.body.id)
//       window.location.href = data.body.url;
//     }
//   } catch (err) {
//     console.log("errrr", err)
//   }
// }
//     //end
//       console.log("response", response.data);

//       return { ...response.data, error: false };
//     }
//   } catch (err) {
//     console.log("err", err.message);
//     return {msg: 'Register fail', error: true };
//   }
// };

export const postRegisterRequestAPI = async (payload) => {
  console.log("payload", payload);
  const param = {
    ...payload,
  };
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    origin,
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/register`,
      param,
      requestOptions
    );
    if (response.data.error) {
      return { msg: response.data.msg, error: true };
    } else {
      console.log("response", response.data);

      // if (response.data.body.token) {
      //   const obj = {
      //     "line_items": [
      //       {
      //         "price": "price_1MyyaDBj65z3fD8N5fRcJKIK",
      //         "quantity": 1
      //       }
      //     ],
      //     "add_on": false
      //   };
      //   try {
      //     const response1 = await axios.post(`${BASE_URL}/subScriptionPayment`, obj, {
      //       headers: {
      //         'Authorization': getToken(),
      //         'Content-Type': 'application/json'
      //       }
      //     });
      //     const data = response1.data;
      //     console.log("data", data);
      //     if (data && data.body && data.body.url) {
      //       localStorage.setItem('paymentId', data.body.id);
      //       window.location.href = data.body.url;
      //     }
      //   } catch (err) {
      //     console.log("errrr", err);
      //   }
      // }

      return { ...response.data, error: false };
    }
  } catch (err) {
    console.log("err", err.message);
    return { msg: 'Register fail', error: true };
  }
};


export const verifyAccountEmail = async (obj) => {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    origin,
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/emailVerification`,
      obj,
      requestOptions
    );
    if (response && response.data.error) {
      return { msg: response.data.msg, error: true };
    } else {
      return { ...response.data, error: false };
    }
  } catch (err) {
    return {msg: 'Email verification fail', error: true };
  }
}


export const postForgotPassRequestAPI = async (payload) => {
  console.log("payload", payload);
  const param = {
    ...payload,
  };
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    origin,
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/forgotPassword`,
      param,
      requestOptions
    );
    if (response.data.error) {
      return { msg: response.data.msg, error: true };
    } else {
      console.log("response", response.data);

      return { ...response.data, error: false };
    }
  } catch (err) {
    console.log("err", err.message);
    return {msg: 'Somthing went wrong!', error: true };
  }
};

export const postVerifyForgotPassRequestAPI = async (payload) => {
  console.log("payload", payload);
  const param = {
    ...payload,
  };
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    origin,
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/verifyForgotPassword`,
      param,
      requestOptions
    );
    if (response.data.error) {
      return { msg: response.data.msg, error: true };
    } else {
      console.log("response", response.data);

      return { ...response.data, error: false };
    }
  } catch (err) {
    console.log("err", err.message);
    return {msg: 'Somthing went wrong!', error: true };
  }
};

export const tokenVerifyRequestAPI = async () => {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization : getToken()
    },
    origin,
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/verifyToken`,
      requestOptions
    );
    if (response.data.error) {
      removeToken();
      removeUserInfo();
      return { msg: response.data.msg, error: true };
    } else {
      console.log("response", response.data);

      return { ...response.data, error: false };
    }
  } catch (err) {
    console.log("err", err.message);
    return {msg: 'Somthing went wrong!', error: true };
  }
};


export const getActivePlanApi = async () => {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization : getToken()
    },
    origin,
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/getActivePlan`,
      requestOptions
    );
    if (response.data.error) {
      return { msg: response.data.msg, error: true };
    } else {
      console.log("response", response.data);

      return { ...response.data, error: false };
    }
  } catch (err) {
    console.log("err", err.message);
    return {msg: 'Somthing went wrong!', error: true };
  }
}

export const updateOneTimePaymentHitCountApi = async () => {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization : getToken()
    },
    origin,
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/updateOneTimePaymentHitRequest`,
      requestOptions
    );
    if (response.data.error) {
      return { msg: response.data.msg, error: true };
    } else {
      console.log("response", response.data);

      return { ...response.data, error: false };
    }
  } catch (err) {
    console.log("err", err.message);
    return {msg: 'Somthing went wrong!', error: true };
  }
}

export const getFamilyHistoryApi = async () => {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization : getToken()
    },
    origin,
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/family_history`,
      requestOptions
    );
    if (response.data.error) {
      return { msg: response.data.msg, error: true };
    } else {
      console.log("response", response.data);

      return { ...response.data, error: false };
    }
  } catch (err) {
    console.log("err", err.message);
    return {msg: 'Somthing went wrong!', error: true };
  }
}

export const AddFamilyHistoryApi = async (payload) => {
  console.log("payload", payload);
  const param = {
    ...payload,
  };
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization : getToken()
    },

  };
  try {
    const response = await axios.post(
      `${BASE_URL}/family_history`,
      param,
      requestOptions
    );
    if (response.data.error) {
      return { ...response.data, error: true };
    } else {
      return { ...response.data, error: false };
      
    }
  } catch (err) {
    console.log("err", err.message);
  }
};