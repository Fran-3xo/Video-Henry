import {combineReducers} from "redux";
import {clasesReducer} from "./clases";
import {cohorteReducer} from "./cohorte";
import {userReducer} from "./login";

export const rootReducer = combineReducers({
    user:!!Object.values(JSON.parse(localStorage.getItem("user")|| null)|| "").length?JSON.parse(localStorage.getItem("user")):userReducer,
    cohorte: cohorteReducer,
    clases: clasesReducer,
});