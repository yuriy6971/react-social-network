import React from 'react'
import {addPostActionCreator } from "../../../redux/profile_reducer.js";
import MyPosts from './MyPosts.jsx';
import { connect } from 'react-redux'; 


const mapStateToProps = (state) => {
    return {
      posts : state.profilePage.postData,
      
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
   
     addPost : (myPostBody) => {
      dispatch(addPostActionCreator(myPostBody));
     },

    
}
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)


export default MyPostsContainer