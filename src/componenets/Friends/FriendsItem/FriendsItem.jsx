import React from 'react';
import s from './../friends.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const FriendsItem = (props) => {
    return (
        <div className = {s.friends_item}>
            <div className = {s.avatar}></div>
            
            <NavLink className={s.name} to={"/friends/" + props.id} >{props.name}</NavLink>
        </div>
    )
}
export default FriendsItem