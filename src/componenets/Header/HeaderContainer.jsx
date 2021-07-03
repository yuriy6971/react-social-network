import React from 'react'
import {connect} from 'react-redux';
import {logoutUserThunkCreator} from '../../redux/auth_reducer'
import Header from './Header';


class HeaderContainer extends React.Component {
      
   render(){
     return  <Header {...this.props}  />
    
   }
}

let mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth,
        login : state.auth.login
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
  
        logoutUserThunk : () => {
            dispatch(logoutUserThunkCreator())
        }
    }
}

export default connect  (mapStateToProps, mapDispatchToProps) (HeaderContainer)
