import {combineReducers} from "redux";
import {clasesReducer} from "./clases";
import {userReducer} from "./login";
import {alumnosReducer} from "./alumnos";

export const rootReducer = combineReducers({
    user: userReducer,
    clases: clasesReducer,
    alumnos : alumnosReducer,
});