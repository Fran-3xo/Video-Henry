import axios from "axios";

export const CohorteActionTypes = {
    SET_COHORTE: 'SET_COHORTE',
    GET_COHORTE: 'GET_COHORTE'
}

export const setCohorte = (data) => {
    return (dispatch) => {
        axios
            .post(`http://localhost:3006/cohortes/nuevo`, {
                
                nombre: data.nombre
            })
            .then((cohorte) => {
                dispatch({
                    type: CohorteActionTypes.SET_COHORTE,
                    payload: cohorte.data
                })
                dispatch(getCohorte())
            }).catch(err => console.log(err));
        };
    };

export const getCohorte = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3006/cohortes`, {withCredentials: true}).then((res) => {
        return dispatch({
            type: CohorteActionTypes.GET_COHORTE,
            payload: res.data
        });
        }).catch(err => console.log(err));
    };
    };