
let initialState = {
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
}

const friendsReducer = (state = initialState,action) => {
    return state;
}
export default friendsReducer;