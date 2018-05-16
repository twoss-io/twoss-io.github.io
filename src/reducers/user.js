const SET_USER = 'SET_USER'
const LOGIN_MOD = 'LOGIN_MOD'
const DEL_USER = 'DEL_USER'

const initialState = {
    user_name: '',
    avatar_url: '',
    display:false
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                user_name: action.user.login,
                avatar_url: action.user.avatar_url,
                display:false
            }
        case DEL_USER:
            return {
                ...state,
                user_name: '',
                avatar_url: ''
            }
        case LOGIN_MOD:
            return {
                ...state,
                display:action.display
            }
        default:
            return state
    }

}