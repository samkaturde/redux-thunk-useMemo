
let initialState  = []

const getUserInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'GETDATA':
            return action.payload;
        default:
            return state
    }
}

export default getUserInfo