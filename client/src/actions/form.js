import axios from "axios";

export const ModuloActionTypes = {
    POST_CLASE: "POST_CLASE"
};

export const createClase = () => {
    return (dispatch) => {
        return axios.post ("http://localhost:3006/clase" , {
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