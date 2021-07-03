import { usersAPI,followUnfollowAPI } from '../api/api.js'



const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = " SET_TOTAL_USERS_COUNT"
const SET_TOGGLE_FETCHING = "SET_TOGGLE_FETCHING"
const SET_TOGGLE_DISABLED = "SET_TOGGLE_DISABLED"



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    portionSize : 13,
    currentPage: 1,
    isFetching: false,
    isDisabled: false


}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.userId) {
                        return { ...item, followed: true }
                    }
                    return item
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.userId) {
                        return { ...item, followed: false }
                    }
                    return item
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.counter
            }
        case SET_TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.toggle
            }

        case SET_TOGGLE_DISABLED:
            return {
                ...state,
                isDisabled: action.disab
            }

        default: return state
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCountAC = (totalUsersCount1) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        counter: totalUsersCount1
    }
}
export const setToggleAC = (boolFetch) => {
    return {
        type: SET_TOGGLE_FETCHING,
        toggle: boolFetch
    }
}

export const setDisabledAC = (bollDisabled) => {
    return {
        type: SET_TOGGLE_DISABLED,
        disab: bollDisabled
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setToggleAC(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(setToggleAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount))
        })
    }
}

export const getUsersWithCangedPageThunkCreator = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPageAC(pageNumber));
        dispatch(setToggleAC(true))
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setToggleAC(false))
            dispatch(setUsersAC(data.items))
        })
    }
}

export const getUserUnfollowThunkCreator = (itemParam) => {
    return (dispatch) => {
        dispatch (setDisabledAC(true))
         dispatch (setToggleAC(true))
        followUnfollowAPI.userUnfollow(itemParam)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch (unfollowAC(itemParam))
                    dispatch (setToggleAC(false))
                    dispatch (setDisabledAC(false))
                }

            })
    }
}

export const getUserFollowThunkCreator = (itemParam) => {
    return (dispatch) => {
        dispatch (setDisabledAC(true))
        dispatch (setToggleAC(true))
        followUnfollowAPI.userFollow(itemParam)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch (followAC(itemParam))
                    dispatch (setToggleAC(false))
                    dispatch (setDisabledAC(false))
                }
            })
    }
}


export default usersReducer