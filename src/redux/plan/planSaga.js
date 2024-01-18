import { call, put, takeEvery } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import { getActivePlanApi, updateOneTimePaymentHitCountApi } from "../api/api";
import { getActivePlanError, getActivePlanSuccess, updateOneTimePaymentHitCountError, updateOneTimePaymentHitCountSuccess } from "./actions";
import { GET_ACTIVE_PLAN_REQUEST, UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_REQUEST } from "./type";

function* getActivePlanHandler() {
  console.log("innnnnnnnnn333")
  const response = yield call(getActivePlanApi);
  console.log("response", response)
  if (response.error) {
    // toast.error(response.msg, {
    //   position: toast.POSITION.TOP_LEFT,
    // });
    yield put(getActivePlanError());
  } else {
    if (response.body && Array.isArray(response.body) && response.body.length) {
      yield put(getActivePlanSuccess({ isPlanActive: true, planType: response.body[0].is_life_time_plan === "1" ? "life_time" : response.body[0].is_life_time_plan === "2" ? "monthly_plan" : "one_time", hitLimit: response.body[0].hit_limit, add_on: response.body[0].add_on === '1' ? true : false, subId: response.body[0].id }));
    } else {
      yield put(getActivePlanError());
    }
  }
}

function* updateOneTimePaymentHitCountHandler() {
  console.log("innnnnnnnnn333")
  const response = yield call(updateOneTimePaymentHitCountApi);
  console.log("response", response)
  if (response.error) {
    yield put(updateOneTimePaymentHitCountError());
  } else {
    if (response.body) {
      yield put(updateOneTimePaymentHitCountSuccess());
    } else {
      yield put(updateOneTimePaymentHitCountError());
    }
  }
}

function* planSagaFun() {
  yield takeEvery(GET_ACTIVE_PLAN_REQUEST, getActivePlanHandler);
  yield takeEvery(UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_REQUEST, updateOneTimePaymentHitCountHandler);
}
export default planSagaFun;
