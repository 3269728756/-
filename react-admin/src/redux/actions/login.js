import {SET_LOGIN,OUT_LOGIN} from "../constants/index"

export function setlogin(user){
    return {
        type:SET_LOGIN,
        user
    }
}

export function outlogin(){
    return {
        type:OUT_LOGIN
    }
}