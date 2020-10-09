import { ModuloActionTypes } from '../actions/clases';


const initialState = {
    clases: [],
    currents: 0
};

export const clasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ModuloActionTypes.GET_MODULO:
            return {
                ...state,
                clases: action.payload.rows,
                currents: action.payload.count
            }
        case ModuloActionTypes.POST_CLASE:
            return {
                ...state,
            }
        default:
            return state
    }
}