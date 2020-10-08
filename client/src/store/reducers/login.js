import { UserActionTypes } from '../actions/login';

//ESTE REDUCER ES UNA PRUEBA DE REDUX
const initialState = {
    user: '',
    usuarios: []
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.LOG_IN:
            return {
                ...state,
                user: action.payload,
            }
            case UserActionTypes.LOG_OUT: 
            return {
                ...state,
                user: ""
            }
            case UserActionTypes.GET_USUARIOS:
                return {
                    ...state,
                    usuarios: action.payload,
                }
            default:
                return state
            
    }
}