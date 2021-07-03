import React, { useState } from 'react';
import s from './Users.module.css';
import userSplash from '../../assets/images/images.jpg';
import { NavLink } from "react-router-dom";

const UsersFunc = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
  

    const spanNumber = pages.filter(item => item >= leftPortionPageNumber && item <= rightPortionPageNumber).map(item => {
        if (props.currentPage === item) {
            return <span key={item} className={`${s.page_number} ${s.selected_page}`}>{item}</span>
        }
        else {
            return <span key={item} className={`${s.page_number}`}>{item}</span>
        }
    })

    return (
        <div className={s.wrapper}>


            <div className={s.line}>
                {
                    portionNumber > 1 &&
                    <button className={s.muv_pages} onClick={() => { setPortionNumber(portionNumber - 1) }} >prev</button>
                }
                {
                     portionNumber == 1 &&
                     <button className = {s.stop_muv}>prev</button>
                }


                <div className={s.pages} onClick={(event) => { props.onPageMarker(event) }} >
                    {spanNumber}
           

                </div>

                {
                     portionCount > portionNumber &&
                    <button className={s.muv_pages} onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>

                 }
                                  
            </div>

            {

                props.users.map(item => <div key={item.id}>

                    <div className={s.container}>
                        <div className={s.avatar}>
                            <NavLink to={'/profile/' + item.id} >
                                <img className={s.user_foto} src={item.photos.small != null ? item.photos.small : userSplash} alt="avatar" />
                            </NavLink>
                            <div className={s.butt_followed}>

                                {item.followed ? <button className={s.butt} disabled={props.isDisabled} onClick={() => {
                                    props.getUserUnfollowThunk(item.id)

                                 
                                }

                                }
                                >Unfollow</button>
                                    : <button className={s.butt} disabled={props.isDisabled} onClick={() => {
                                        props.getUserFollowThunk(item.id)

                                      
                                    }}

                                    >Follow</button>}
                            </div>
                        </div>
                        <div className={s.user_info}>
                            <div className={s.names_info}>
                                <div className={s.name}>{item.name}</div>
                                <div className = {s.name}>{item.id}</div>
                                <div>{item.status} </div>
                            </div>

                            <div className={s.location_info}>
                                <div>{"item.location.city"}</div>
                                <div>{"item.location.country"} </div>
                            </div>
                        </div>
                    </div>
                </div>)


            }

        </div>
    )
}
export default UsersFunc