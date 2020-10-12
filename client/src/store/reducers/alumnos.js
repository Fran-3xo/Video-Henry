import { alumnosActionTypes } from '../actions/alumnos.js';


const initialState = {
    alumnos_cohorte: [],
    alumnos_modulo: [],
    alumnos: [],
    success: false,
    success_msg: null,
    err_msg: null,
};

export const alumnosReducer = (state = initialState, action) => {
    switch (action.type) {
        case alumnosActionTypes.GET_ALUMNOS:
            return {
                ...state,
                alumnos: action.payload,
            }
        case alumnosActionTypes.CLOSE_ALERTS:
            return {
                ...state,
                success:false,
                success_msg:null,
                err_msg:null,
            }
        case alumnosActionTypes.POST_ALUMNO:
            return {
                ...state,
                success:true,
                success_msg: "Alumno/s agregado/s correctamente"
            }
        case alumnosActionTypes.DROP_USER:
            return {
                ...state,
                success:true,
                success_msg: "Usuario/s eliminado/s correctamente"
            }
        case alumnosActionTypes.POST_DIRECTOR:
            return {
                ...state,
                success:true,
                success_msg: "Director/res agregado/s correctamente"
            }
        case alumnosActionTypes.ERR_USER_ACTION:
            return {
                ...state,
                err_msg: action.payload,
            }
        default:
            return state
    }
}