import * as actionTypes from "./authActionTypes"
import Axios from "../../utils/Axios"
import axios from "axios"
import {updateMessages} from "./friendAction"


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userID, refreshToken, profile) => {
    createSocket(userID)
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userID: userID,
        profile: profile,
        refreshToken: refreshToken
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const storeAuth = (token, refreshToken, expiration, profile, userID) =>{
    const expirationTime = Date.now() + Number(expiration);
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('expirationTime', expirationTime);
    localStorage.setItem('profile', JSON.stringify(profile))
    localStorage.setItem('userID', userID);
}


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('profile')
    localStorage.removeItem('userID');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            const refreshToken = localStorage.getItem('refreshToken')
            if (refreshToken == "undefined") {
                dispatch(logout())
            } else {
                dispatch(refreshUserToken(refreshToken)); 
            }
            
        }, expirationTime);
    };
};

export const refreshUserToken = (refreshToken) =>{
    console.log(refreshToken);
    return async dispatch => {
        try {
            const payload = {
                refreshToken: refreshToken
            }
            const response = await axios.post("http://192.168.43.236:8000/users/refresh-token", payload)
            storeAuth(
                response.data.token, 
                response.data.refreshToken,
                response.data.expirationTime,
                response.data.profile,
                response.data.userID
            )
            dispatch(authSuccess(response.data.token, response.data.userID, response.data.refreshToken, response.data.profile));
            dispatch(checkAuthTimeout(response.data.expirationTime))
        } catch (error) {
            dispatch(authFail(error));
            
        }
    }
} 

export const auth =  (email, password) => {
    return async dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
        };
       try {
            const response = await axios.post("http://192.168.43.236:8000/users/login", authData)
            storeAuth(
                response.data.token, 
                response.data.refreshToken,
                response.data.expirationTime,
                response.data.profile,
                response.data.userID
            )
            dispatch(authSuccess(response.data.token, response.data.userID, response.data.refreshToken, response.data.profile));
            dispatch(checkAuthTimeout(response.data.expirationTime));
            
       } catch (error) {
           dispatch(authFail(error))
       }
    }
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken')
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = Number(localStorage.getItem('expirationTime'));
            if (expirationDate <= Date.now()) {
                dispatch(refreshUserToken(refreshToken));
            } else {
                const userID = localStorage.getItem('userID');
                const profile = JSON.parse(localStorage.getItem('profile'))
                dispatch(authSuccess(token, userID, refreshToken, profile));
                dispatch(checkAuthTimeout(expirationDate - Date.now(), refreshToken));
            }   
        }
    };
};

export const getProfile = () =>{
    return async dispatch => {
        try {
            const response = await Axios.get("/users/profile")
            dispatch({type:actionTypes.GET_PROFILE_SUCCESS, payload:response.data})
            localStorage.setItem("profile", JSON.stringify(response.data))
        } catch (error) {
            dispatch({type:actionTypes.GET_PROFILE_FAIL})
        }
    }
}

// let interval

// const resetTimer = (dispatch, interval) =>{
//     if (interval) {
//         clearTimeout(interval)
//     }
//     const timeout = setTimeout(() => {
//         dispatch({type:"DISCONNECTED", status:true})
//     }, 7000);

//     return timeout
// }

export const createSocket = (uid) =>{
    return async dispatch => {
        try {
            dispatch({type:actionTypes.CREATE_SOCKET_START})
            const conn = new WebSocket(`ws://192.168.43.236:8000/ws?uid=${uid}`)
            conn.onopen = () =>{
                // interval = resetTimer(dispatch)
                dispatch({type:actionTypes.CREATE_SOCKET_SUCCESS, payload:conn})
                dispatch({type:"CONNECTED", status:false})
            }
            conn.onclose = () =>{
                dispatch({type:actionTypes.CREATE_SOCKET_FAIL})
            }
            conn.onmessage = (event) =>{
                const message = JSON.parse(event.data)
                if (message.sender !== uid && message.messageType !== "info") {
                    dispatch(updateMessages(conn, uid, message.sender, "delivered"))
                }
                dispatch({type:"NEW_MESSAGE", payload: message})  
            }
        } catch (error) {
            dispatch({type:"DISCONNECTED", status:true})
            dispatch({type:actionTypes.CREATE_SOCKET_FAIL})
        }
    }
}

// else if(message.content === "Ping" && message.messageType === "info"){
//     return interval = resetTimer(dispatch, interval)
// }
