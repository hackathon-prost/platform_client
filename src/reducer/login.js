import {
    HANDLE_USERNAME_CHANGE,
    HANDLE_USERPASSWORD_CHANGE
} from '../actions/actions'

export function handleUsernameChange(state='',action){
    switch (action.type) {
        case HANDLE_USERNAME_CHANGE:
            return action.user   
        default:
            return state
    }
}
export function handleUserPasswordChange(state='',action){
    switch (action.type) {
        case HANDLE_USERPASSWORD_CHANGE:
            return action.password   
        default:
            return state
    }
}
