import { all, fork } from "@redux-saga/core/effects";
import loginSagaFun from "./auth/login/LoginSaga";
import planSagaFun from "./plan/planSaga";
// import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(loginSagaFun), fork(planSagaFun)]);
}
