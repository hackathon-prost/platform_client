import { combineReducers } from 'redux';
import {handleUsernameChange, handleUserPasswordChange} from './login'
export default combineReducers({
    handleUsernameChange,
    handleUserPasswordChange
})