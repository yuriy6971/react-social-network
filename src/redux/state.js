import { render } from "react-dom/cjs/react-dom.production.min";
import profileReduser from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import friendsReducer from "./friends_reducer";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NWE_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";


let store = {
   _state : {
     profilePage : {
      postData: [
        { id: 1, message: "Hello,my friend!", likeCount: " 3" },
        { id: 2, message: "i love Beatles...", likeCount: " 21" },
      ],
      newPostText : "it-kamasutra",
     },

    dialogsPage : {
        dialogsData : [
       { id: 1, name: "Andrey" },
        { id: 2, name: "Dmitry" }, 
        { id: 3, name: "Sasha" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Valera" }, 
        { id: 6, name: "Victor" }
      ],
      messagesData: [
        { id: 1, message: "Hi! How are you?" },
        { id: 2, message: "Ok. I learn It kamasutra" },
        { id: 3, message: "Hello! I am Sasha" }
      ],
      newMessageText : "",
     
    },
    

    friendsPage : {
      friendsData : [
        {id : 1,name : "Victor"},
        {id : 2,name : "Artur"},
        {id : 3,name : "Bob"},
        {id : 4,name : "Sveta"},
        {id : 5,name : "Alexsander"},
        {id : 6,name : "Katrin"},
        {id : 7,name : "Phillip"},
        {id : 8,name : "Aaron"}
      ]
    },
 
  },
  getState(){
    return this._state;
  },
   _callSubscriber () {
    console.log("state is changed")
  },
  subscribe  (observer)  {
    this._callSubscriber = observer;
  },

  dispatch (action) {

    this._state.profilePage = profileReduser(this._state.profilePage,action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
    this._state.friendsPage = friendsReducer (this._state.friendsPage,action);

    this._callSubscriber(this._state);



  }
  
   
}
export default store;
window.store = store;

 


