import axios from "axios";

export const alumnosActionTypes = {
    GET_ALUMNOS: "GET_ALUMNOS",
    PUT_USER_COHORTE: "PUT_USER_COHORTE",
    PUT_MODULO: "PUT_MODULO",
    GET_ALUMNOS_MODULO: "GET_ALUMNOS_MODULO",
    POST_ALUMNO: "POST_ALUMNO"
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
            },{withCredentials:true}) .then(res => {
                    dispatch({
                        type: alumnosActionTypes.POST_ALUMNO,
                    });
                    dispatch(getAlumnos())
            }) .catch(err => console.log(err))
        }
    }