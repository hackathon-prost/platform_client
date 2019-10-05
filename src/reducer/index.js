import { combineReducers } from 'redux';
import {
    handleUsernameChange,
    handleUserPasswordChange,
    } from './login'
import {
    handleSearchChange
} from './search'

export default combineReducers({
    handleUsernameChange,
    handleUserPasswordChange,
    handleSearchChange
})