import { UserActionTypes } from '../actions/login';

//ESTE REDUCER ES UNA PRUEBA DE REDUX
const initialState = {
    user: '',
    usuarios: null,
    failure_login:false,
    pag: 1,
    pags: 0,
    limit: 10,
    ActionType: "", 
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.LOG_IN:
            return {
                ...state,
                user: action.payload,
                failure_login:false,
            }
        case UserActionTypes.LOG_OUT: 
            return {
                ...state,
                user: ""
            }
        case UserActionTypes.FAIL: 
            return {
                ...state,
                failure_login: true
            }
        case UserActionTypes.GET_USUARIOS:
            return {
                ...state,
                usuarios: action.payload.usuarios.rows,
                pag: action.payload.pag,
                pags : action.payload.usuarios.count,
                limit: action.payload.limit,
                ActionType: UserActionTypes.GET_USUARIOS
            }
        case UserActionTypes.SEARCH_USUARIOS:
            return {
                ...state,
                usuarios: action.payload.usuarios.rows,
                pag: action.payload.pag,
                pags : action.payload.usuarios.count,
                limit: action.payload.limit,
                ActionType: UserActionTypes.SEARCH_USUARIOS
            }
        default:
            return state
            
    }
}