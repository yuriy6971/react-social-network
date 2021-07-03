import { ProfileAPI } from "../api/api";


const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"
const CHANGE_USER_PHOTO = "CHANGE_USER_PHOTO"

let initialState = {
  postData: [
    { id: 1, message: "Hello,my friend!", likeCount: " 3" },
    { id: 2, message: "i love Beatles...", likeCount: " 21" },
  ],
  profile : null,
  status : "",
  

}

const profileReduser = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:  
      let newPost = {
        id: 3,
        message: action.postText,
        likeCount: " 0"
      };
      return {
        ...state,
        postData : [...state.postData, newPost],
      }

        case SET_USER_PROFILE :
          return {
            ...state,
            profile : action.profile
          }

          case SET_USER_STATUS : 
          return {
            ...state,
            status : action.status
          }
          case CHANGE_USER_PHOTO :
            return {
              ...state,
             profile : {...state.profile,photos : action.photos}
            }
    default:
      return state

  }

}

export const addPostActionCreator = (myPostBody) => {
  return {
    type: ADD_POST,
    postText : myPostBody
  }
}


export const setUserProfileAC = (profile) => ({
  type : SET_USER_PROFILE,
  profile
})

export const setUserStatusAC = (status) => {
  return {
    type:   SET_USER_STATUS,
    status : status
  }
}

export const changePhotoAC = (photos) => {
  return {
    type : CHANGE_USER_PHOTO,
    photos : photos
  }
}

export const getUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    ProfileAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfileAC(response.data))
    })
  }
}

export const getUserStausThunkCreator = (userId) => {
  return (dispatch) => {
    ProfileAPI.getStatus(userId)
    .then(response => {
      dispatch(setUserStatusAC(response.data))
    })
      
    
  }
}

export const updateStatusThunkCreator = (status) => {
  return (dispatch) => {
    ProfileAPI.updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0){
        dispatch(setUserStatusAC(status))
      }
    })
  }
}

export const savePhotoThunkCreator = (photoFile) => {
  return (dispatch) => {
    ProfileAPI.setPhoto(photoFile)
    .then(response => {
      if (response.data.resultCode === 0){
        dispatch(changePhotoAC(response.data.data.photos))
      }
    })
  }
}

export const saveProfileThunkCreator = (profile) => {

  return(dispatch,getState) => {
   const userId = getState().auth.id
    ProfileAPI.saveProfile(profile)
    .then(response => {
      if (response.data.resultCode === 0){
        dispatch(getUserProfileThunkCreator(userId)) 
      }
    })    
  }
}



export default profileReduser;