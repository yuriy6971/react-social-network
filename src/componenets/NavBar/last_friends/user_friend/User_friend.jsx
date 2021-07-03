import React from 'react';
import s from './User_friend.module.css';

const User_friend = (props) => {

    return(
        <div className = {s.friend}>
            <div className = {s.avatar}></div>
            <div className = {s.name_friend}>{props.name}</div>
        </div>
    )
}
export default User_friend