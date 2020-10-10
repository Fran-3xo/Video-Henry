import axios from "axios";

export const UserActionTypes = {
    LOG_IN: "LOG_IN",
    LOG_OUT:"LOG_OUT",
    GET_USUARIOS: "GET_USUARIOS",
    SEARCH_USUARIOS: "SEARCH_USUARIOS",
    FAIL: "FAIL"
    }

    export const getUsuarios = (pag = 1, limit = 10) => {
        return dispatch => {
            return axios.get(`http://localhost:3006/user/users/${limit}/${pag}`,{withCredentials: true})
            .then(res => {
                dispatch({type: UserActionTypes.GET_USUARIOS, payload: {usuarios: res.data, pag, limit}})
            })
            .catch(err => console.log(err))
        }
    }
    export const searchUsuarios = (query, pag=1, limit = 15) => {
        return dispatch => {
            return axios.get(`http://localhost:3006/user/search/${query}/${limit}/${pag}`,{withCredentials: true})
            .then(res => {
                dispatch({type: UserActionTypes.SEARCH_USUARIOS, payload: {usuarios: res.data, pag, limit}})
            })
            .catch(err => console.log(err))
        }
    }
export const logIn = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3006/user/me",
        {withCredentials: true}
        ).then((res) => {
            dispatch({
                type:UserActionTypes.LOG_IN,
                payload: res.data
            })
        }).catch(err => dispatch(fail()));
    }
}
export const fail = () =>{
    return {type: UserActionTypes.FAIL}
}
export const logOut = () =>{
    return (dispatch) => {
        axios.get("http://localhost:3006/user/logout", { withCredentials: true })
            .then(() => dispatch({type: UserActionTypes.LOG_OUT}))
            .catch(err => console.log(err));
    }
}