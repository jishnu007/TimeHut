import * as actionTypes from './actionTypes';

export const login = (id,role) => {
    return {
        type: actionTypes.LOGIN,
        id:id,
        role:role
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export const onAutoLogin=(id,role)=>{
    const logId = localStorage.getItem('loggedId');
    const logRole = localStorage.getItem('loggedRole');
    return dispatch=>{
        if(logId !=null && logRole !=''){
            dispatch(login(id,role));
        }else{
            dispatch(logout());
        }
    }
    
}