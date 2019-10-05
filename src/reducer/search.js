import {HANDLE_SEARCH_INPUT} from '../actions/actions'

export function handleSearchChange(state='',action){
    switch (action.type) {
        case HANDLE_SEARCH_INPUT:
            return action.search   
        default:
            return state
    }
}