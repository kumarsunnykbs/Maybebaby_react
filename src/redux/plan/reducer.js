import { GET_ACTIVE_PLAN_ERROR, GET_ACTIVE_PLAN_REQUEST, GET_ACTIVE_PLAN_SUCCESS, UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_ERROR, UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_REQUEST, UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_SUCCESS } from "./type";
const initialState = {
    loading: false,
    isPlanActive: false,
    planType: null,
    hitLimit: 0,
    refreshHitLimit: false,
    add_on: false,
    subId: null
}
export const planReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVE_PLAN_REQUEST:
            return { ...state, loading: true };
        case GET_ACTIVE_PLAN_SUCCESS:
            return { ...state, loading: false, isPlanActive: action.payload.isPlanActive, planType: action.payload.planType, hitLimit: action.payload.hitLimit, add_on: action.payload.add_on, subId: action.payload.subId };
        case GET_ACTIVE_PLAN_ERROR:
            return { ...state, loading: false, isPlanActive: false, planType: null, hitLimit: 0 };
        case UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_REQUEST:
            return { ...state, loading: true };
        case UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_SUCCESS:
            return { ...state, loading: false, refreshHitLimit: !state.refreshHitLimit };
        case UPDATE_ONE_TIME_PAYMENT_HIT_COUNT_ERROR:
            return { ...state, loading: false };
        default:
            return state;
    }
}