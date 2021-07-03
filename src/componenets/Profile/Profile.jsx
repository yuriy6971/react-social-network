import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/myPostsContainer';

const Profile = (props) => {
  return (
    <div>

      <ProfileInfo className = {s.post} profile = {props.profile} status = {props.status} updateStatusThunk = {props.updateStatusThunk} isOwner = {props.isOwner}
       savePhotoThunk = {props.savePhotoThunk} saveProfileThunk = {props.saveProfileThunk} /> 
      
          <MyPostsContainer store = {props.store} />
      

    </div>
  )
} 
     
export default Profile;