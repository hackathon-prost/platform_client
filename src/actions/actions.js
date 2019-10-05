export const HANDLE_USERNAME_CHANGE = 'HANDLE_USERNAME_CHANGE';
export const HANDLE_USERPASSWORD_CHANGE = 'HANDLE_USERPASSWORD_CHANGE';
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const HANDLE_SEARCH_INPUT = 'HANDLE_SEARCH_INPUT'

export function handleUsernameChange(user){
    return{
        type: HANDLE_USERNAME_CHANGE,
        user
    }
}

export function handleUserPasswordChange(password) {
    return {
        type: HANDLE_USERPASSWORD_CHANGE,
        password
    }
}

export function userLogin() {
    return {
        type: USER_LOGIN,
        loading: true
    }
}

export function userLoginSucceded(user) {
    return {
        type: USER_LOGIN_SUCCESS,
        currentUser: user,
        loading: false
    }
}

export function userLoginError(error) {
    return {
        type: USER_LOGIN_ERROR,
        error: error,
        loading: false
    }
}

export function handleSearchInput(search){
    return{
        type: HANDLE_SEARCH_INPUT,
        search
    }
}