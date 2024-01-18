import { GET_ACTIVE_PLAN_ERROR, GET_ACTIVE_PLAN_REQUEST, GET_ACTIVE_PLAN_SUCCESS, UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_ERROR, UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_REQUEST, UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_SUCCESS } from "./type"

export const getActivePlanRequest = (payload) => {
    return {
        type: GET_ACTIVE_PLAN_REQUEST,
        payload
    }
}

export const getActivePlanSuccess = (payload) => {
    return {
        type: GET_ACTIVE_PLAN_SUCCESS,
        payload
    }
}

export const getActivePlanError = (payload) => {
    return {
        type: GET_ACTIVE_PLAN_ERROR,
        payload
    }
}

export const updateOneTimePaymentHitCountRequest = (payload) => {
    return {
        type: UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_REQUEST,
        payload
    }
}

export const updateOneTimePaymentHitCountSuccess = (payload) => {
    return {
        type: UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_SUCCESS,
        payload
    }
}

export const updateOneTimePaymentHitCountError = (payload) => {
    return {
        type: UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_ERROR,
        payload
    }
}
