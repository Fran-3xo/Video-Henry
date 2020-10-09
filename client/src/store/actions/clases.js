import axios from "axios";

export const ModuloActionTypes = {
    GET_MODULO: 'GET_MODULO',
    POST_CLASE: 'POST_CLASE',
    SEARCH_VIDEOS: "SEARCH_VIDEOS"
};

export const getClasesByModulo = (modulo, pag = 48) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3006/clase/modulo/${modulo}/${pag}`, { withCredentials: true }).then((res) => {
            return dispatch({
                type: ModuloActionTypes.GET_MODULO,
                payload: res.data
            });
        }).catch(err => console.log(err));
    };
};
export const postClase = (clase) => {
    return (dispatch) => {
        return axios.post(`http://localhost:3006/clase/`,clase,{ withCredentials: true })
            .then(() => {
                dispatch({
                    type: ModuloActionTypes.POST_MODULO,
                });
                return dispatch(getClasesByModulo(clase.modulo));
            })
            .then(() => console.log("GET_MODULO"))
            .catch(err => console.log(err));
    };
};

export const searchVideos = (query) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3006/clase/search/${query}`,{withCredentials:true}
        ).then((res) => {
            dispatch({
                type:ModuloActionTypes.SEARCH_VIDEOS,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
    }
}