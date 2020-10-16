import { UserActionTypes } from '../actions/login';

//ESTE REDUCER ES UNA PRUEBA DE REDUX
const initialState = {
    user: '',
    usuarios: null,
    logged: 0,
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
                logged: true,
            }
        case UserActionTypes.LOG_OUT: 
            return {
                ...state,
                user: "",
                logged: 0,
            }
        case UserActionTypes.FAIL: 
            return {
                ...state,
                logged: "",
            }
        case UserActionTypes.CLOSE_USER_ALERT:
            return{
                ...state,
                logged:0
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
        case UserActionTypes.POSTING_DROPPING_USERS:
            return {
                ...state,
                usuarios: null,
                pag: 1,
                pags: 0,
                limit: 10,
                ActionType: "", 
            }
        default:
            return state
            
    }
}