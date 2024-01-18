import { combineReducers } from "redux";

import loginHandler from "./auth/login/LoginReducer";
import { planReducer } from "./plan/reducer";
import imageReducer from "./familyData/reducer";


export default combineReducers({
    auth: loginHandler,
    plan: planReducer,
    imageReducer,
})