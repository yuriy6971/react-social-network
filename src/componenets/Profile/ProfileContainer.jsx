import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Profile from './Profile'
import { setUserProfileAC, getUserProfileThunkCreator, getUserStausThunkCreator, updateStatusThunkCreator,savePhotoThunkCreator,
     saveProfileThunkCreator } from '../../redux/profile_reducer.js'
import { compose } from 'redux'




class ProfileContainer extends React.Component {

    refreshPofile(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
        }

        this.props.getUserProfileThunk(userId);
        this.props.getUserStatusTunk(userId)
    }

    componentDidMount() {
        this.refreshPofile();
    }

    componentDidUpdate(prevProps,prevState){
        if(this.props.match.params.userId != prevProps.match.params.userId ) {
            this.refreshPofile()
        }
    }

    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} 
            isOwner = {!this.props.match.params.userId} savePhotoThunk = {this.props.savePhotoThunk} saveProfileThunk = {this.props.saveProfileThunk} />
            
        )
    }

}   


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        autorizedUserId : state.auth.id ,
       

    }
}
let mapDispathToProps = (dispatch) => {
    return {
    
        getUserProfileThunk: (userId) => {
            dispatch(getUserProfileThunkCreator(userId))
        },

        getUserStatusTunk: (userId) => {
            dispatch(getUserStausThunkCreator(userId))
        },
        updateStatusThunk: (status) => {
            dispatch(updateStatusThunkCreator(status))
        },
        savePhotoThunk : (photoFile) => {
            dispatch(savePhotoThunkCreator(photoFile))
        },
        saveProfileThunk : (profile) => {
            dispatch(saveProfileThunkCreator(profile))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispathToProps),
    withRouter,
  
)(ProfileContainer)