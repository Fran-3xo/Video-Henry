import axios from "axios";


export const UserActionTypes = {
    LOG_IN: "LOG_IN",
    LOG_OUT:"LOG_OUT"
    }


export const logIn = () => {
    return (dispatch) => {
        axios.post ("http://localhost:3006/user/login", {
            user: req.body.user,
        },
        {withCredentials: true}
        ).then((res) => dispatch({
            type:UserActionTypes.LOG_IN,
            payload: res.data
        }))
    }
}
export const logOut = () =>{
    return (dispatch) => {
        axios.get("http://localhost:3006/user/logout", { withCredentials: true })
            .then(() => dispatch({type: UserActionTypes.LOG_OUT}))
            .catch(err => console.log(err));
    }
}