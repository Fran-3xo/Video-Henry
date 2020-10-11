import axios from "axios";
const {REACT_APP_API_URL} = process.env
export const ModuloActionTypes = {
    GET_MODULO: 'GET_MODULO',
    GET_VIDEO: 'GET_VIDEO',
    POST_CLASE: 'POST_CLASE',
    SEARCH_VIDEOS: "SEARCH_VIDEOS"
};

export const getClasesByModulo = (modulo, pag = 1) => {
    return (dispatch) => {
        return axios.get(`${REACT_APP_API_URL}/clase/categoria/${modulo}/${pag}`, { withCredentials: true }).then((res) => {
            return dispatch({
                type: ModuloActionTypes.GET_MODULO,
                payload: res.data
            });
        }).catch(err => console.log(err));
    };
};
export const postClase = (clase) => {
    return (dispatch) => {
        return axios.post(`${REACT_APP_API_URL}/clase/`,clase,{ withCredentials: true })
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
export const getVideo = (id) =>{
    return (dispatch) => {
        return axios.get(`${REACT_APP_API_URL}/clase/video/${id}`,{withCredentials:true}
        ).then((res) => {
            dispatch({
                type:ModuloActionTypes.GET_VIDEO,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
    }
}
export const searchVideos = (query) => {
    return (dispatch) => {
        return axios.get(`${REACT_APP_API_URL}/clase/search/${query}`,{withCredentials:true}
        ).then((res) => {
            dispatch({
                type:ModuloActionTypes.SEARCH_VIDEOS,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
    }
}