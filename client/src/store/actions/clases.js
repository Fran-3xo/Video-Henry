import axios from "axios";
const {REACT_APP_API_URL} = process.env
export const ModuloActionTypes = {
    GET_MODULO: 'GET_MODULO',
    GET_VIDEO: 'GET_VIDEO',
    GET_VIDEOS: 'GET_VIDEOS',
    POST_CLASE: 'POST_CLASE',
    SEARCH_VIDEOS: "SEARCH_VIDEOS",
    SEARCH_VIDEOS_ADMIN: "SEARCH_VIDEOS_ADMIN",
    DROP_VIDEO: "DROP_VIDEO",
    ERROR_VIDEO_ACTION : "ERROR_VIDEO_ACTION",
    CLOSE_ALERTS : "CLOSE_ALERT"
};
export const errorVideoAction = (error) => {
    return {
        type: ModuloActionTypes.ERROR_VIDEO_ACTION,
        payload: error
    }
}
export const closeAlerts = () =>{
    return {
        type: ModuloActionTypes.CLOSE_ALERTS
    }
}
export const getClasesByModulo = (modulo, pag = 1) => {
    return (dispatch) => {
        return axios.get(`${REACT_APP_API_URL}/clase/categoria/${modulo}/${pag}`, { withCredentials: true }).then((res) => {
            return dispatch({
                type: ModuloActionTypes.GET_MODULO,
                payload: res.data,
            });
        }).catch(err => console.log(err));
    };
};
export const getVideos = (pag=1,limit=10) =>{
    return (dispatch) => {
        axios.get(`${REACT_APP_API_URL}/clase/videos/${pag}/${limit}`,{withCredentials:true}
        ).then((res) => {
            dispatch({
                type:ModuloActionTypes.GET_VIDEOS,
                payload:{videos:res.data, pag, limit}
            })
        })
        .catch(err => console.log(err))
    }
}
export const postClase = (clase) => {
    return (dispatch) => {
        return axios.post(`${REACT_APP_API_URL}/clase/`,clase,{ withCredentials: true })
            .then(() => {
                dispatch({
                    type: ModuloActionTypes.POST_CLASE,
                });
                dispatch(getVideos())
            })
            .catch(err => dispatch(errorVideoAction(err.response.data)));
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
export const dropVideos = (videos) => {
    return (dispatch) => {
        return axios.put(`${REACT_APP_API_URL}/clase/delete`,videos,{ withCredentials: true })
            .then(() => {
                dispatch({
                    type: ModuloActionTypes.DROP_VIDEO,
                });
                dispatch(getVideos())
            })
            .catch(err => console.log(err));
    };
};
export const searchVideosAdmin = (query, pag=1,limit=10) => {
    return (dispatch) => {
        return axios.get(`${REACT_APP_API_URL}/clase/search_admin/${query}/${pag}/${limit}`,{withCredentials:true}
        ).then((res) => {
            dispatch({
                type:ModuloActionTypes.SEARCH_VIDEOS_ADMIN,
                payload:{videos:res.data, pag, limit}
            })
        })
        .catch(err => console.log(err))
    }
}
export const searchVideos = (query, limit) => {
    return (dispatch) => {
        return axios.get(`${REACT_APP_API_URL}/clase/search/${query}/${limit}`,{withCredentials:true}
        ).then((res) => {
            dispatch({
                type:ModuloActionTypes.SEARCH_VIDEOS,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
    }
}