import {INIT_CITY,CHANGE_CITY} from "../constants/index"

export const initCity=(cityName)=>{
   return { type:INIT_CITY,
            cityName}
}
export const changeCity=(cityName)=>{
    return {
        type:CHANGE_CITY,
        cityName
    }
}