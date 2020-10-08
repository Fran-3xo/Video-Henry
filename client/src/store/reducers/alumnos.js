import { alumnosActionTypes } from '../actions/alumnos.js';


const initialState = {
    alumnos_cohorte: [],
    alumnos_modulo: [],
    alumnos: []
};

export const alumnosReducer = (state = initialState, action) => {
    switch (action.type) {
        case alumnosActionTypes.GET_ALUMNOS:
            return {
                ...state,
                alumnos: action.payload,
            }
            case alumnosActionTypes.POST_ALUMNO:
                return {
                    ...state,
                }
            case alumnosActionTypes.DROP_USER:
                return {
                    ...state
                }
            case alumnosActionTypes.POST_DIRECTOR:
                return {
                    ...state,
                }
        default:
            return state
    }
}