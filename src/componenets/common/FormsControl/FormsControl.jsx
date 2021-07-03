import React from 'react'
import s from './FormsControl.module.css'



export const TextArea = ({input,meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return ( 
    <div>
        <textarea className = {s.form_control + " " + (hasError? s.error : " ") }  {...input} {...props} />
    { hasError && <p className = {s.text_error}>{meta.error}</p> }
    </div>
    
     )
}
