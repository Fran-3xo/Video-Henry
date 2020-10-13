import { ModuloActionTypes } from '../actions/clases';


const initialState = {
    clases: null,
    currents: 0,
    video:"pending",
    videos: null,
    ActionType:"",
    pag: 1,
    limit: 10,
    errMsg: null,
    success: false

};

export const clasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ModuloActionTypes.GET_MODULO:
            return {
                ...state,
                clases: action.payload.rows,
                currents: action.payload.count,
                ActionType: action.type
                
            }
        case ModuloActionTypes.POST_CLASE:
            return {
                ...state,
                success: true,
            }
        case ModuloActionTypes.GET_VIDEO:
            return {
                ...state,
                video: action.payload
            }
        case ModuloActionTypes.GET_VIDEOS:
            return {
                ...state,
                videos: action.payload.videos.rows,
                pag: action.payload.pag,
                pags: action.payload.videos.count,
                limit: action.payload.limit,
                ActionType: ModuloActionTypes.GET_VIDEOS
            }
        case ModuloActionTypes.SEARCH_VIDEOS:
            return {
                ...state,
                clases: action.payload.rows,
                currents: action.payload.count,
                ActionType: action.type
            }
        case ModuloActionTypes.SEARCH_VIDEOS_ADMIN:
            return {
                ...state,
                videos: action.payload.videos.rows,
                pag: action.payload.pag,
                pags: action.payload.videos.count,
                limit: action.payload.limit,
                ActionType: ModuloActionTypes.SEARCH_VIDEOS_ADMIN
            }
        case ModuloActionTypes.ERROR_VIDEO_ACTION:
            return{
                ...state,
                errMsg: action.payload
            }
        case ModuloActionTypes.CLOSE_ALERTS:
            return{
                ...state,
                errMsg: null,
                success: false
            }
        default:
            return state
    }
}