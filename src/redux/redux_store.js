import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReduser from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import friendsReducer from "./friends_reducer";
import usersReducer from "./users_reducer"
import authReducer from './auth_reducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './app_reducer'

let reducers = combineReducers({
    profilePage : profileReduser,
    dialogsPage : dialogsReducer,
    friendsPage : friendsReducer,
    usersPage : usersReducer,
    auth : authReducer,
    form : formReducer,
    app : appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store

export default store;