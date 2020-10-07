import {combineReducers} from "redux";
import {clasesReducer} from "./clases";
import {cohorteReducer} from "./cohorte";
import {userReducer} from "./login";
export const rootReducer = combineReducers({
    user: !!Object.values(JSON.parse(localStorage.getItem("user"))).length?JSON.parse(localStorage.get("user")):userReducer,
    cohorte: cohorteReducer,
    clases: clasesReducer,
});