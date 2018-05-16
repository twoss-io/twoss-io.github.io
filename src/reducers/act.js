const RECEIVE_ACT = 'RECEIVE_ACT'

const initialState = {
    acts:[]
}

export default function act(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_ACT:
            return {
                acts : action.acts
            }
        default:
            return state
    }

}