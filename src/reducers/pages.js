const SWITCH = 'SWITCH'

const initialState = {
    pages:'home'
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case SWITCH:
            return {
                pages:action.page
            }
        default:
            return state
    }
}