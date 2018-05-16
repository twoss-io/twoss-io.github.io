const REQUEST_REPO = 'REQUEST_REPO'
const RECEIVE_REPO = 'RECEIVE_REPO'

const initialState = {
    isFetched: false,
    repos: [],
    displayRepos: []
}

export default function repo(state = initialState, action) {
    switch (action.type) {
        case REQUEST_REPO:
            return {
                ...state,
                isFetched: true
            }

        case RECEIVE_REPO:
            return {
                ...state,
                repos: action.repos,
                isFetched: false
            }
        default:
            return state
    }

}