const SET_INFO = 'SET_INFO'

const initialState = {
    show:false,
    md: ''
}

export default function info(state = initialState, action) {
    switch (action.type) {
        case SET_INFO:
            return {
                show:true,
                md: action.md
            }
        default:
            return state
    }

}