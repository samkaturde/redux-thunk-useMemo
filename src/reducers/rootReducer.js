import { combineReducers } from "redux";
import changeNumber from "./../reducers/upDown";
import getUserInfo from "./getData";

const rootReducer = combineReducers({
    changeNumber,
    getUserInfo
});

export default rootReducer;