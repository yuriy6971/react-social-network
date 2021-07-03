import React from 'react'
import s from './Login.module.css'
import LoginReduxForm from './LoginForm/LoginForm'
import { loginUserThunkCreator } from '../../redux/auth_reducer'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'


const Login = (props) => {

    const onSubmit = (formData) => {
      
        props.loginUserThunk(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to = {"/profile"} />
    }

    return (
        <div className={s.container}>
            <h2 className={s.head_log}>Login please</h2>
            <LoginReduxForm onSubmit = {onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}

let mapDispatchToProps  = (dispatch) => {
    return {
        loginUserThunk : (email,password,rememberMe) => {
            dispatch(loginUserThunkCreator(email,password,rememberMe))
        }
    }
}



export default connect (mapStateToProps,mapDispatchToProps)(Login) 