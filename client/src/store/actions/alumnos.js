import axios from "axios";

export const alumnosActionTypes = {
    GET_ALUMNOS_COHORTE: "GET_ALUMNOS_COHORTE",
    PUT_USER_COHORTE: "PUT_USER_COHORTE",
    PUT_MODULO: "PUT_MODULO",
    GET_ALUMNOS_MODULO: "GET_ALUMNOS_MODULO"
}


    export const getAlumnosid = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3006/alumnos/cohorte/${id}`, {withCredentials: true}).then((res) => {
        dispatch({
            type: alumnosActionTypes.GET_ALUMNOS_COHORTE,
            payload: res.data
        });
        }).catch(err => console.log(err));
    };
    };


    export const putAlumno = (values) => {
    console.log(values)
        return dispatch => {
            return axios.put("http://localhost:3006/alumnos/editar", {
            usuarioId : values.alumnoId,
            cohorteId: values.cohorteId,
            grupoId: values.grupoId,
            } , {withCredentials: true})
            .then (res => dispatch ({type:alumnosActionTypes.PUT_USER_COHORTE, payload: res.data}))
            .catch(err => console.log(err))
        }
    }
//le cambia el proceso a un alumno
    export const procesoAlumno = ({proceso}) => {
        return dispatch => {
            return axios.put ("http://localhost:3006/alumnos/modulo", {
                proceso: proceso
            },{withCredentials: true}
            ).then(res => dispatch ({type: alumnosActionTypes.PUT_MODULO, payload: res.data}))
            .catch(err => console.log(err))
        }
    }
    //trae los alumnos por modulo
    export const getAlumnoModulo = (id) => {
        return dispatch => {
            return axios.get(`http://localhost:3006/alumnos/${id}`,{withCredentials: true})
            .then(res => dispatch({type: alumnosActionTypes.GET_ALUMNOS_MODULO, payload: res.data}))
            .catch(err => console.log(err))
        }
    }