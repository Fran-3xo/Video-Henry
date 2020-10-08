import axios from "axios";


export const UserActionTypes = {
    LOG_IN: "LOG_IN",
    LOG_OUT:"LOG_OUT",
    GET_USUARIOS: "GET_USUARIOS"
    }

    export const getUsuarios = () => {
        return dispatch => {
            return axios.get(`http://localhost:3006/user/`,{withCredentials: true})
            .then(res => {
                dispatch({type: UserActionTypes.GET_USUARIOS, payload: res.data})
            })
            .catch(err => console.log(err))
        }
    }
export const logIn = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3006/user/me",
        {withCredentials: true}
        ).then((res) => dispatch({
            type:UserActionTypes.LOG_IN,
            payload: res.data
        })).catch(err => console.log(err));
    }
}
export const logOut = () =>{
    return (dispatch) => {
        axios.get("http://localhost:3006/user/logout", { withCredentials: true })
            .then(() => dispatch({type: UserActionTypes.LOG_OUT}))
            .catch(err => console.log(err));
    }
}