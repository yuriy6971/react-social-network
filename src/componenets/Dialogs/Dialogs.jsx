

import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import { reduxForm, Field } from 'redux-form'
import { TextArea } from '../common/FormsControl/FormsControl';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators.js'



const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map(item => <DialogItem name={item.name} id={item.id} />);

    const messagesElements = props.messagesElls.map(item => <MessageItem message={item.message} />);
  
    let addNewMessage = (values) => {
        
        props.sendMessage(values.newMessageBody)
    }


    return (
        <div className={s.block_dialog}>
            <div className={s.dialogs}>
                <div className={s.users}>

                    {dialogsElements}
            
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}



                <AddMessageFormRedux onSubmit={addNewMessage} />
         
         </div>   </div>
    )
}

 const maxLength20 = maxLengthCreator(20)
 const AddMessageForm = (props) => {
    return (
            <form className={s.text_input} onSubmit={props.handleSubmit}>
                <Field component={TextArea} validate={[requiredField, maxLength20]} name="newMessageBody" cols="50" rows="5" placeholder="введите месседж"></Field>
                <div>
                    <button className={s.butt}>Add message</button>
                </div>

            </form>
    )
}
const AddMessageFormRedux = reduxForm ({form : "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;