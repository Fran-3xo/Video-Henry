import { FormActionTypes } from '../actions/clases';


const initialState = {
    form: []
};


export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case FormActionTypes.POST_CLASE:
            return {
                ...state,
                form: action.payload,
            }
        default:
            return state
    }
}