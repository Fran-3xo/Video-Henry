import axios from "axios";
import { getUsuarios } from "./login";
const {REACT_APP_API_URL} = process.env
export const alumnosActionTypes = {
    GET_ALUMNOS: "GET_ALUMNOS",
    PUT_USER_COHORTE: "PUT_USER_COHORTE",
    PUT_MODULO: "PUT_MODULO",
    GET_ALUMNOS_MODULO: "GET_ALUMNOS_MODULO",
    POST_ALUMNO: "POST_ALUMNO",
    DROP_USER: "DROP_USER",
    POST_DIRECTOR: "POST_DIRECTOR",
    ERR_USER_ACTION: "ERR_USER_ACTION",
    CLOSE_ALERTS : "CLOSE_ALERTS",
}
export const closeAlerts = () => {
    return {
        type: alumnosActionTypes.CLOSE_ALERTS,
    }
}
export const errUserAction = (err) => {
    return {
        type: alumnosActionTypes.ERR_USER_ACTION,
        payload: err,
    }
}
    //crea un alumno
export const postAlumno = (users) => {
    return dispatch => {
        dispatch({
            type: "POSTING_DROPPING_USERS",
        })
        axios.post (REACT_APP_API_URL + "/alumnos/agregar", {
            users,
        },{withCredentials:true}).then(res => {
                dispatch({
                    type: alumnosActionTypes.POST_ALUMNO,
                });
                dispatch(getUsuarios())
        }).catch(err => dispatch(errUserAction(err.response.data)))
    }
}
    //borra un alumno
export const dropUser = (users) => {
    return dispatch => {
        dispatch({
            type: "POSTING_DROPPING_USERS",
        })
        axios.put(REACT_APP_API_URL + "/alumnos/delete", {
            users,
        },{withCredentials: true}).then(res => {
            dispatch({
                type:alumnosActionTypes.DROP_USER,
            })
            dispatch(getUsuarios())
        }).catch(err => dispatch(errUserAction(err.response.data)))
    }
}

export const postDirector = (users) => {
    return dispatch => {
        dispatch({
            type: "POSTING_DROPPING_USERS",
        })
        axios.post (REACT_APP_API_URL + "/alumnos/agregar/director", {
            users,
        },{withCredentials:true}).then(res => {
                dispatch({
                    type: alumnosActionTypes.POST_DIRECTOR,
                });
                dispatch(getUsuarios())
        }).catch(err => dispatch(errUserAction(err.response.data)))
    }
}