import React from 'react';
import s from './ProfileForm.module.css'
import { reduxForm, Field } from 'redux-form'


const ProfileDataForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <label className={s.lab_user}>user name : <Field className = {s.field} type="text" name={"fullName"} component={"input"} placeholder = "" /> </label>
            <label className={s.lab_user}>looking for a job : <Field className = {s.check} type="checkbox" name={"lookingForAJob"} component={"input"} /> </label>
            <label className={s.lab_user}>loking for a job description : <Field className = {s.field} type="text" name={"lookingForAJobDescription"} component={"input"} /> </label>
            <label  className = {s.lab_user}>aboutMe : <Field className={s.field} type = "text" name = {"aboutMe"} component = {"input"}/> </label>
            <label className = {s.lab_user}>facebook : <Field className = {s.field} type = "url" name = {"contacts.facebook"} component = {"input"} /></label>
            <label className = {s.lab_user}>website : <Field className = {s.field} type = "url" name = {"contacts.website"} component = {"input"} /></label>
            <label className = {s.lab_user}>vk : <Field className = {s.field} type = "url" name = {"contacts.vk"} component = {"input"} /></label>
            <label className = {s.lab_user}>twitter : <Field className = {s.field} type = "url" name = {"contacts.twitter"} component = {"input"} /></label>
            <div className = {s.block_buttons}>
                <button className={s.butt_sub} type = "submit">save</button>
                <button className = {s.butt_sub} type = "button" onClick = {props.backProfile}>go to Profile</button>
            </div>

        </form>
    )
}


const ProfileDataReduxForm = reduxForm ({form : "userInfo"})(ProfileDataForm)

export default ProfileDataReduxForm