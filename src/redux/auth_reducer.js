import {loginAPI} from '../api/api.js'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = "SET_USER_DATA";
const DELETE_USER_DATA = "DELETE_USER_DATA"


let initialState = {
    id : null,
    email : null,
    login : null,
    isAuth : false
}

const authReducer = (state = initialState,action) => {
    switch (action.type){
        case SET_USER_DATA :     
            return {
                ...state,
                ...action.data,
                isAuth : true
            }
         case DELETE_USER_DATA :
             return {
                 ...state,
                 ...action.data,
                 isAuth : false
             }

            default: return state
    }
}

export const setUserDataAC = (id,email,login) => {
    return {
        type : SET_USER_DATA,
        data : {
            id :id,
            email : email,
            login : login
        },
        
    }
}

export const deleteUserDataAC = () => {
    return {
        type : DELETE_USER_DATA,
        data : {
            id : null,
            email :null,
            login : null
        }
    }
} 

export const setUserDataThunkCreator = () => {
    return (dispatch) => {
     return loginAPI.goLogin()
    .then(data => {
        if(data.resultCode === 0){
            let {id,email,login} = data.data;
            dispatch(setUserDataAC(id,email,login))
        }
    })
    }
}

export const loginUserThunkCreator = (email, password, rememberMe) => {
    return(dispatch) => {
        loginAPI.loginUser(email, password, rememberMe)
        .then (response => {
            if(response.data.resultCode === 0){
                dispatch(setUserDataThunkCreator())
            }
            else {
                 let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                 dispatch(stopSubmit("login", {_error : message}))  
            }
        })
    } 
}
 
export const logoutUserThunkCreator= () => {
    return (dispatch) => {
        loginAPI.logoutUser()
        .then (response => {
          if (response.data.resultCode === 0){
            dispatch(deleteUserDataAC())
          }
        })
            

            
        }
    }


export default authReducer