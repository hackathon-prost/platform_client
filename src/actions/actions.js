export const HANDLE_USERNAME_CHANGE = 'HANDLE_USERNAME_CHANGE';
export const HANDLE_USERPASSWORD_CHANGE = 'HANDLE_USERPASSWORD_CHANGE';

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