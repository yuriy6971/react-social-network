import React from 'react'
import loader from '../../assets/images/loader1.svg'
import s from './Preloader.module.css'



let Preloader = (props) => {
    return (
        <div className = {s.preload}>
            <img  src = {loader}/>
        </div>
    )
}
export default Preloader