import { setUserDataThunkCreator } from "./auth_reducer"

const SET_INITIALIZED = "SET_INITIALIZED"


let initialState = {
    initialized : false
}

const appReducer = (state = initialState,action) => {
    switch (action.type){
        case SET_INITIALIZED :
            return {
                ...state,
                initialized :true
            }
            default : return state
    }
}

export const initializedAC = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const initializedAppThunkCreator = () => {
    return (dispatch) => {
      let promise = dispatch(setUserDataThunkCreator())

      promise.then(() =>{
        dispatch(initializedAC())
      })
       
    }
}

export default appReducer