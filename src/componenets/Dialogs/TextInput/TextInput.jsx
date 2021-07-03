import React from 'react';
import s from './../Dialogs.module.css';

const TextInput = (props) => {
    <div className = {s.text_input}>
        <textarea name="text_messages" id="" cols="50" rows="5" placeholder = "введите месседж"></textarea>
        <button type = 'button' className = {s.butt}>Add Message</button>
    
    </div>
}
export default TextInput;