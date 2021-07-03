import React from 'react';
import s from './friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem.jsx'

const Friends = (props) => {

  const friendsElements = props.store.getState().friendsPage.friendsData.map(item => <FriendsItem name = {item.name} id = {item.id} />);


  return (
    <div className = {s.cont_friends}>
      <div className={s.title}>
        This is my friends!
      </div>
      <div className ={s.list_friends}>
        {friendsElements}
      </div>
    </div>
  )
}
export default Friends