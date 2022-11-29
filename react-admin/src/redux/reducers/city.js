import {INIT_CITY,CHANGE_CITY} from "../constants/index"

const defaultState={
    cityName:"西安"
}
const city=(state=defaultState,action)=>{
    switch(action.type){
        case INIT_CITY:
        return{
            cityName:action.cityName
        };
        case CHANGE_CITY:
        return {
            cityName:action.cityName
        };
        default:
            return state
    }
}
export default city