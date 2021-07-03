import react from 'react';
import s from './../Dialogs.module.css'




const MessageItem = (props) => {
    return(
        <div className={s.mess}>{props.message}</div>
    )
}
export default MessageItem;