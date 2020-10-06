import { ModuloActionTypes } from '../actions/clases';


const initialState = {
    clases: []
};

export const clasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ModuloActionTypes.GET_MODULO:
            return {
                ...state,
                clases: action.payload,
            }
        default:
            return state
    }
}