import { alumnosActionTypes } from '../actions/alumnos.js';


const initialState = {
    alumnos_cohorte: [],
    alumnos_modulo: []
};

export const alumnosReducer = (state = initialState, action) => {
    switch (action.type) {
        case alumnosActionTypes.GET_ALUMNOS_COHORTE:
            return {
                ...state,
                alumnos_cohorte: action.payload,
            }
                    case alumnosActionTypes.PUT_USER_COHORTE:
                        return {
                            ...state,
                        }
                        case alumnosActionTypes.PUT_MODULO:
                            return {
                                ...state,
                            }
                        case alumnosActionTypes.GET_ALUMNOS_MODULO:
                            return {
                                ...state,
                                alumnos_modulo: action.payload
                            }
        default:
            return state
    }
}