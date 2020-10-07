import {combineReducers} from "redux";
import {clasesReducer} from "./clases";
import {cohorteReducer} from "./cohorte";
import {userReducer} from "./login";

export const rootReducer = combineReducers({
    user: userReducer,
    cohorte: cohorteReducer,
    clases: clasesReducer,
});