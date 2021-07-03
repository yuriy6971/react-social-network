import React from 'react'
import s from './Users.module.css';



let NumberPage = (props) => {
    return (
     <span className = {s.page_number}  >{props.number}</span>

 
    )
}
export default NumberPage