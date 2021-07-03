import React from 'react'
import s from './LoginForm.module.css'
import {reduxForm ,Field} from 'redux-form'


const LoginForm = (props) => {
    return (
        <form className={s.login_form}  name="login_form" onSubmit = {props.handleSubmit}  >

            {/* <label htmlFor="login" className={`${s.lab} ${s.lab_log}`}>Введите логин : <input type="text" id="login" placeholder="Login"  size="22" /></label>

            <label htmlFor="password" className={`${s.lab} ${s.lab_password}`}>Введите пароль : <input type="password" id="password" placeholder="password" size="22" /></label>

            <label htmlFor="rem_radio" className={`${s.lab_checkBox}`}> <input type="checkbox" name="rem" value="remember" /> : Запомнить </label>
            <div className = {s.block_buttons}>
                <button className={s.butt_sub}>Login</button>
            </div> */}

            <label className={`${s.lab} ${s.lab_log}`}>Введите email : <Field  type="text"  placeholder="email" name = {"email"}  size="22" component = {"input"} required = {true} pattern = "^[A-Z a-z 0-9._%+-]+@[A-Z a-z 0-9-]+.+.[A-Z a-z]{2,4}$" /></label>

            <label className={`${s.lab} ${s.lab_password}`}>Введите пароль : <Field type="password"  placeholder="password" name = {"password"} size = "22" component = {"input"} required = {true} minLength = "6" /></label>

            <label htmlFor="rem_radio" className={`${s.lab_checkBox}`}> <Field component ={"input"} type="checkbox" name= {"rememberMe"} value="remember" /> : Запомнить </label>
            {
                props.error && <div className = {s.form_error}>
                    {props.error}
                </div>
            }
            <div className = {s.block_buttons}>
                <button className={s.butt_sub}>Login</button>
            </div>

        </form>

    )
}

const LoginReduxForm = reduxForm({form : 'login'})(LoginForm)

export default LoginReduxForm 