import {clasesReducer} from "./clases";
import {cohorteReducer} from "./cohorte";
import {userReducer} from "./login";
import {combineReducers} from "redux"
export const rootReducer = combineReducers({
    user: userReducer,
    cohorte: cohorteReducer,
    clases: clasesReducer,
});