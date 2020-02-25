import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuth: false,
    role:''
}

const checkValidorNot=(state,action)=>{
    if(action.id!==null){
        return{
            ...state,
            isAuth:true,
            role: action.role
        }
    }else{
        return state;
    }   
}

const logoutUser = (state,action) =>{
    localStorage.removeItem('loggedId');
    localStorage.removeItem('loggedRole');
    return {
        ...state,
        isAuth: false,
        role: ''
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN:
            return checkValidorNot(state,action);
        case actionTypes.LOGOUT:
            return logoutUser(state,action);
        default:
            return state
    }
}

export default reducer;