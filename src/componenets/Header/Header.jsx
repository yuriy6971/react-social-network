import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img className={s.pics} src="https://st.depositphotos.com/1744650/2796/v/111/depositphotos_27962707-stock-illustration-social-media-speech-bubble.jpg" />
      </div>
      <div className={s.login_block}>
        {
          props.isAuth ? <div className={s.log_out}>
            <p className={s.login_text}>{props.login}</p>
            <div className = {s.block_butt}>
              <button type="button" className={s.log_butt} onClick={props.logoutUserThunk} > Log out</button>
            </div>
          </div>
            : <NavLink to={"/login"}>Login</NavLink>


        }
        

      </div>
    </header>
  )
}
export default Header;

