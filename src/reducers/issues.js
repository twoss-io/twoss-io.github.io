const REQUEST_ISS = 'REQUEST_ISS'
const RECEIVE_ISS = 'RECEIVE_ISS'

const initialState = {
    isFetched: false,
    issues: {}
}

export default function iss(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ISS:
            return {
                ...state,
                isFetched: true
            }

        case RECEIVE_ISS:
            let isu = state.issues
            isu[action.repo] = action.issues
            return {
                isFetched:false,
                issues:isu
            }
        default:
            return state
    }
}