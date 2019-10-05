export const HANDLE_USER_CHANGE = 'HANDLE_USER_CHANGE';

export function handleUserChange(user){
    return{
        type: HANDLE_USER_CHANGE,
        user
    }
}