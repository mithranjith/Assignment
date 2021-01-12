
const initState = {
    name: "",
    password: ""
}


const userReducer = (state = initState, action) => {
    switch (action.type) {
            
        case 'CHANGE_USER':
            console.log("hi",action.payload);
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default userReducer;