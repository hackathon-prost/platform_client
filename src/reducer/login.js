import {
    HANDLE_USER_CHANGE
} from '../actions/actions'

export function handleUserChange(state='',action){
    switch (action.type) {
        case HANDLE_USER_CHANGE:
            return action.user   
        default:
            return state
    }
}
