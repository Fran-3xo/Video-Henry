import axios from "axios";
const {REACT_APP_API_URL} = process.env
export const ModuloActionTypes = {
    POST_CLASE: "POST_CLASE"
};

export const createClase = () => {
    return (dispatch) => {
        return axios.post (REACT_APP_API_URL + "/clase" , {
            modulo: req.body.modulo,
            clase: req.body.clase,
            link: req.body.link
        }, {withCredentials: true}
            ).then((res)=> {
                return dispatch ({
                    type:ModuloActionTypes.POST_CLASE,
                    payload: res.data
                })
            }).catch(err => console.log(err))
    }
}