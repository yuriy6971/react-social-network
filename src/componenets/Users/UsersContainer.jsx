import React from 'react';
import { connect } from 'react-redux';
import UsersFunc from './UsersFunc.jsx'
import {  getUsersThunkCreator, getUsersWithCangedPageThunkCreator, getUserUnfollowThunkCreator, getUserFollowThunkCreator } from '../../redux/users_reducer.js';
import Preloader from '../common/preloader.js';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js'
import { compose } from 'redux'
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsDisabled } from '../../redux/users_selectors.js';

class UsersClass extends React.Component {  

    constructor(props) {
        super(props);

    }

  

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (pageNumber) => {
        this.props.getUsersPageChangeThunk(pageNumber, this.props.pageSize)
    }

    onPageMarker = (event) => {
       let num = event.target;
      let pageNumber = +num.innerHTML;
      this.props.getUsersPageChangeThunk(pageNumber, this.props.pageSize)
    }


    render() {

        return <div>
            
            {this.props.isFetching ? <Preloader /> : null}

            <UsersFunc totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize} currentPage={this.props.currentPage} portionSize = {this.props.portionSize} onPageChanged={this.onPageChanged} users={this.props.users}
                isFethcing={this.props.isFetching}
                isDisabled={this.props.isDisabled} getUserUnfollowThunk={this.props.getUserUnfollowThunk}
                getUserFollowThunk={this.props.getUserFollowThunk} onPageMarker = {this.onPageMarker} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isDisabled: getIsDisabled(state),
        portionSize : state.usersPage.portionSize,
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    
        getUsersThunk: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        getUsersPageChangeThunk: (pageNumber, pageSize) => {
            dispatch(getUsersWithCangedPageThunkCreator(pageNumber, pageSize))
        },
        getUserUnfollowThunk: (itemParam) => {
            dispatch(getUserUnfollowThunkCreator(itemParam))
        },
        getUserFollowThunk: (itemParam) => {
            dispatch(getUserFollowThunkCreator(itemParam))
        }
    }


}



const UsersContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
    (UsersClass)

export default UsersContainer