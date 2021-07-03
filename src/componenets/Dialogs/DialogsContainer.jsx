import React from 'react'
import { sendMessageAC } from '../../redux/dialogs_reducer.js';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js'
import {compose} from 'redux'


let mapStateToProps = (state) => {
    return {
        messagesElls: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogsData,
       

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
   
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody))

        }
    }

}



const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)

export default DialogsContainer