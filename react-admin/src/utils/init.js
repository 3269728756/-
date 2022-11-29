// 利用localStorage将得到的user(用户数据)保存在内存中
import store from "../redux/store/store"
import * as loginActions from "../redux/actions/login"
if(localStorage.getItem("future")){
    store.dispatch(loginActions.setlogin(JSON.parse(localStorage.getItem("future"))))
}