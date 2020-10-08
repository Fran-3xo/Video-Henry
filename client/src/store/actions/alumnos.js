import axios from "axios";
import { getUsuarios } from "./login";

export const alumnosActionTypes = {
    GET_ALUMNOS: "GET_ALUMNOS",
    PUT_USER_COHORTE: "PUT_USER_COHORTE",
    PUT_MODULO: "PUT_MODULO",
    GET_ALUMNOS_MODULO: "GET_ALUMNOS_MODULO",
    POST_ALUMNO: "POST_ALUMNO",
    DROP_USER: "DROP_USER",
    POST_DIRECTOR: "POST_DIRECTOR"
}

    export const getAlumnos = () => {
        return dispatch => {
            return axios.get(`http://localhost:3006/alumnos/`,{withCredentials: true})
            .then(res => {
                dispatch({type: alumnosActionTypes.GET_ALUMNOS, payload: res.data})
            })
            .catch(err => console.log(err))
        }
    }

    //crea un alumno
    export const postAlumno = (users) => {
        return dispatch => {
            return axios.post ("http://localhost:3006/alumnos/agregar", {
                users,
            },{withCredentials:true}).then(res => {
                    dispatch({
                        type: alumnosActionTypes.POST_ALUMNO,
                    });
                    dispatch(getUsuarios())
            }).catch(err => console.log(err))
        }
    }
    //borra un alumno
export const dropUser = (users) => {
    return dispatch => {
        return axios.put("http://localhost:3006/alumnos/delete", {
            users,
        },{withCredentials: true}).then(res => {
            dispatch({
                type:alumnosActionTypes.DROP_USER,
            })
            dispatch(getUsuarios())
        }).catch(err => console.log(err))
    }
}

export const postDirector = (users) => {
    return dispatch => {
        return axios.post ("http://localhost:3006/alumnos/agregar/director", {
            users,
        },{withCredentials:true}).then(res => {
                dispatch({
                    type: alumnosActionTypes.POST_DIRECTOR,
                });
                dispatch(getUsuarios())
        }).catch(err => console.log(err))
    }
}