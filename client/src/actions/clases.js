import axios from "axios";

export const ModuloActionTypes = {
    GET_MODULO: 'GET_MODULO'
};

export const getClases = (modulo) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3006/clase/${modulo}`, { withCredentials: true }).then((res) => {
            return dispatch({
                type: ModuloActionTypes.GET_MODULO,
                payload: res.data
            });
        }).catch(err => console.log(err));
    };
};