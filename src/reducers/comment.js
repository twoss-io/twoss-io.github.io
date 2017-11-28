const REQUEST_COM = 'REQUEST_COM'
const RECEIVE_COM = 'RECEIVE_COM'

const initialState = {
    isFetched: false,
    comments: {}
}

export default function com(state = initialState, action) {
    switch (action.type) {
        case REQUEST_COM:
            return {
                ...state,
                isFetched: true
            }

        case RECEIVE_COM:
            let com = state.comments
            com[action.issue] = action.comments
            return {
                isFetched:false,
                comments:com
            }
        default:
            return state
    }

}