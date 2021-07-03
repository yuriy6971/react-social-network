import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from "react-router-dom";
import Last_friends from './last_friends/Last_friends.jsx';



const NavBar = (props) => {
  return (
    <nav className={s.nav}>
      
      <NavLink className={s.item} to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      

      <NavLink className={s.item} to='/dialogs' activeClassName={s.activeLink}>Dialogs</NavLink>
      
      <NavLink className={s.item} to='/news' activeClassName={s.activeLink}>News</NavLink>
      
      <NavLink className={s.item} to='/music' activeClassName={s.activeLink}>Music</NavLink>
      
      <NavLink className={`${s.item} ${s.setting}`} to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
      <NavLink className = {s.item} to = '/users' activeClassName = {s.activeLink}>Users</NavLink>
      <NavLink className = {s.item} to = '/login' activeClassName = {s.activeLink}>Login</NavLink>
      <NavLink className={`${s.item} ${s.friends}`} to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
     
       
       <Last_friends store = {props.store} />
       
       
    </nav>
  )
}

export default NavBar; 