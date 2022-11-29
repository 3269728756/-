import {SET_LOGIN,OUT_LOGIN} from "../constants/index"
const defaultState={
    user:{
        token:"",
        nick:""
    }
}
export default function login(state=defaultState,action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case SET_LOGIN:
            return{
                user:action.user
            }
        case OUT_LOGIN:
            return;
        default:
             return state
    }
    
}