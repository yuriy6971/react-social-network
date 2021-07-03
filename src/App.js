import logo from './logo.svg';
import './App.css';
import HeaderContainer from './componenets/Header/HeaderContainer.jsx';
import NavBar from './componenets/NavBar/NavBar.jsx';
import ProfileContainer from './componenets/Profile/ProfileContainer.jsx';
import DialogsContainer from './componenets/Dialogs/DialogsContainer.jsx'
import News from './componenets/News/News.jsx';
import Music from './componenets/Music/Music.jsx';
import Settings from './componenets/Settings/Settings.jsx';
import Friends from './componenets/Friends/friends.jsx';
import Login from './componenets/Login/Login.jsx'
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from './componenets/Users/UsersContainer.jsx'
import  {initializedAppThunkCreator} from './redux/app_reducer'
import {connect} from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react'
import Preloader from './componenets/common/preloader';


class App extends React.Component {

 componentDidMount() {
   this.props.initializedAppThunk()
 }


  render() {

    if(!this.props.initialized){
      return <Preloader/>
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          
          <NavBar {...this.props} />



          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <DialogsContainer {...this.props    }  />} />

            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />




            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/friends' render={() => <Friends />} />
            <Route path='/login' component={Login} />
          </div>

        </div>
      </BrowserRouter>
    );
  }
}
  
let mapStateToProps = (state) => {
  return {
    initialized : state.app.initialized
  }
}

  let mapDispatchToProps = (dispatch) => {
    return {
    
      initializedAppThunk : () => {
        dispatch(initializedAppThunkCreator())
      }
    }
  }


  export default compose (
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(App)
  

  
