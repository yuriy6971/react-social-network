import React from 'react';
import s from './Content.module.css';
import Dialogs from 'Dialogs/Dialogs.jsx';
import Profile from './Profile/Profile.jsx';
import News from 'News/News.jsx';
import Music from 'Music/Music/jsx';
import Settings from "Settings/Settings.jsx";
import { Route } from "react-router-dom";



const Content = (props) => {
    <div className={s.app-wrapper-content}>

        <Route path='/dialogs' render={() => <Dialogs dialogs={props.appState.dialogsData} messagesElls={props.appState.messagesData} />} />
        <Route path='/profile' render={() => <Profile posts={props.appState.postData} />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
    </div>
}
export default Content;