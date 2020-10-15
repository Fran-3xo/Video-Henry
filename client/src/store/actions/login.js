import axios from "axios";
const {REACT_APP_API_URL} = process.env
export const UserActionTypes = {
    LOG_IN: "LOG_IN",
    LOG_OUT:"LOG_OUT",
    GET_USUARIOS: "GET_USUARIOS",
    SEARCH_USUARIOS: "SEARCH_USUARIOS",
    FAIL: "FAIL",
    CLOSE_USER_ALERT:"CLOSE_USER_ALERT",
    POSTING_DROPPING_USERS: "POSTING_DROPPING_USERS"
    }
export const closeUserAlert = ()=>{
    return{
        type: UserActionTypes.CLOSE_USER_ALERT
    }
} 
export const getUsuarios = (pag = 1, limit = 10) => {
    return dispatch => {
        return axios.get(`${REACT_APP_API_URL}/user/users/${limit}/${pag}`,{withCredentials: true})
        .then(res => {
            dispatch({type: UserActionTypes.GET_USUARIOS, payload: {usuarios: res.data, pag, limit}})
        })
        .catch(err => console.log(err))
    }
}
export const searchUsuarios = (query, pag=1, limit = 15) => {
    return dispatch => {
        return axios.get(`${REACT_APP_API_URL}/user/search/${query}/${limit}/${pag}`,{withCredentials: true})
        .then(res => {
            dispatch({type: UserActionTypes.SEARCH_USUARIOS, payload: {usuarios: res.data, pag, limit}})
        })
        .catch(err => console.log(err))
    }
}
export const logIn = () => {
    return (dispatch) => {
        axios.get(REACT_APP_API_URL + "/user/me",
        {
            withCredentials: true,
        }
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
        axios.get(REACT_APP_API_URL +"/user/logout", { withCredentials: true })
            .then(() => {
                dispatch({type: UserActionTypes.LOG_OUT})
                window.location.replace("/");
            })
            .catch(err => console.log(err));
    }
}