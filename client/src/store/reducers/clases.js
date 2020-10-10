import { ModuloActionTypes } from '../actions/clases';


const initialState = {
    clases: [],
    currents: 0,
    video:{}
    
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
        case ModuloActionTypes.GET_VIDEO:
            return {
                ...state,
                video: action.payload
            }
        case ModuloActionTypes.SEARCH_VIDEOS:
            return {
                ...state,
                clases: action.payload
            }
        default:
            return state
    }
}