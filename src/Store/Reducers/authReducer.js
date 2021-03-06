import * as actionTypes from '../Actions/authActionTypes';

const initialState = {
    token: null,
    refreshToken: null,
    userID: null,
    profile: null,
    error: null,
    loading: false,
    websocket: null,
    socketLoading: false,
    authRedirectPath: '/'

};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START:
             return {
                ...state,
                error: null,
                loading: true

             }
        case actionTypes.AUTH_SUCCESS: 
            return {
                ...state,
                userID: action.userID,
                token: action.token,
                refreshToken: action.refreshToken,
                profile: action.profile,
                error: null,
                loading: false
            }
        case actionTypes.AUTH_FAIL: 
            return {
                loading: false,
                error: action.error,
            }
        case actionTypes.AUTH_LOGOUT: 
            return {
                ...state,
                userID: null,
                token: null,
                refreshToken: null,
                profile: null,
                websocket: null
            }
        case actionTypes.SET_REDIRECT:
            return{
                ...state,
                authRedirectPath: action.path
            }
        case actionTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload
            }
        case actionTypes.CREATE_SOCKET_START:
            return {
                ...state,
                socketLoading: true
            }
        case actionTypes.CREATE_SOCKET_SUCCESS:
            return {
                ...state,
                websocket: action.payload,
                socketLoading: false
            }
        case actionTypes.CREATE_SOCKET_FAIL:
            return {
                ...state,
                websocket: null,
                socketLoading: false
            }
        default:
            return state;
    }
};

export default reducer;