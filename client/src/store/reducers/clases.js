import { ModuloActionTypes } from '../actions/clases';


const initialState = {
    clases: null,
    pags: 1,
    limit_show: 48,
    video:"pending",
    videos: null,
    ActionType:"",
    pag: 1,
    limit: 10,
    fetching_videos:false,
    errMsg: null,
    success: false,

};

export const clasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ModuloActionTypes.CLEAN_VIDEOS:
            return{
                ...state,
                clases:null,
            }
        case ModuloActionTypes.CLEAN_VIDEO:
            return{
                ...state,
                video:"pending",
            }
        case ModuloActionTypes.FETCHING_VIDEOS:
            return{
                ...state,
                fetching_videos: action.payload,
                clases: null,
            }
        case ModuloActionTypes.GET_MODULO:
            return {
                ...state,
                clases: action.payload.moreVideos?state.clases.concat(action.payload.rows):action.payload.rows,
                currents: action.payload.count,
                ActionType: action.type,
                pags: action.payload.pag,
                fetching_videos: false,
                limit_show: action.payload.limit
                
            }
        case ModuloActionTypes.POSTING_DROPPING_VIDEO:
            return{
                ...state,
                videos:null,
                pag:1,
                pags:1,
                limit:10,
                ActionType:"",
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
                clases: action.payload.moreVideos?state.clases.concat(action.payload.rows):action.payload.rows,
                currents: action.payload.count,
                ActionType: action.type,
                pags: action.payload.pag,
                fetching_videos: false,
                limit_show: action.payload.limit
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