import * as axios from 'axios';



const instance = axios.create({
    withCredentials : true,
    headers : {
        "API-KEY" : "8a660025-2e21-499d-9905-f175629767f2"
    },
    baseURL : `https://social-network.samuraijs.com/api/1.0/`
})
const instancePost = axios.create({
    withCredentials : true,
    postBody : {},
    headers : {
        "API-KEY" : "8a660025-2e21-499d-9905-f175629767f2"
    },
    baseURL : `https://social-network.samuraijs.com/api/1.0/`
})


export const usersAPI = {
    getUsers(currentPage,pageSize) {
        return instance.get(`users?page= ${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    }
   

}

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
     
    },
    getStatus (userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instancePost.put(`profile/status`,{status : status})
    },
    setPhoto(photoFile){
       const formData = new FormData;
       formData.append("image",photoFile)

        return instancePost.put(`profile/photo`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        } )
    },

    saveProfile(profile){
      return instancePost.put('profile', profile)
    }


}
 
export const loginAPI = {
    goLogin() {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
    },

    loginUser(email, password, rememberMe){
        return instancePost.post(`auth/login`,{email, password, rememberMe})
    },
    logoutUser(){
        return instance.delete(`auth/login`)
    }

}

export const followUnfollowAPI = {

    userFollow(itemId) {
      return instancePost.post(`follow/${itemId}`)
      .then(response => {
          return response.data
      })
    },

    userUnfollow(itemId) {
        return instance.delete(`follow/${itemId}`)
        .then(response => {
            return response.data
        })
    }
}







