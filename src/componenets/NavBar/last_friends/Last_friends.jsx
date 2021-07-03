import React from 'react';
import s from './Last_friends.module.css';
import  User_friend from './user_friend/User_friend.jsx';


const Last_friends = (props) => {
const arrFriends = props.store.getState().friendsPage.friendsData.slice();


const arrLast = arrFriends.splice(arrFriends.length - 3, 3);
let arrlastFriends = arrLast.map(item => <User_friend name = {item.name} id = {item.id} key = {item.id} />);

    return(
        <div className = {s.container}>
 
    {arrlastFriends}
  
    </div>
    )
    
}

export default Last_friends 