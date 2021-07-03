



const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogsData: [
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
    
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.textMessage;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 4, message: body }]
            }



        default:
            return state;
    }
}

export const sendMessageAC = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        textMessage: newMessageBody

    }
}



export default dialogsReducer;