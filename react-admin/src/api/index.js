// 用于创建前端接口的文件
import axios from "../utils/request"



// 配置路径地址
const base={
        BaseUrl:"http://localhost:5000",
        cityUrl:"/api/aj/getcitycode",
        searchUrl:"/api/search",
        detail:"/api/detail",
        comment:"/api/comment",
        commentOrder:"/api/order/comment",
        homehot1:"/api/home/hot1",
        homehot2:"/api/home/hot2",
        login:"/api/login",
        submitComment:"/api/order/submit/comment"
}
// 配置api
const api={
    // 获取热点房屋
    getHomehot1(params){
        return axios.get(base.BaseUrl+base.homehot1,{params})
    },
    getHomehot2(params){
        return axios.get(base.BaseUrl+base.homehot2,{params})
    },
    // 获取城市列表
    getCitys(){
        return axios.get(base.cityUrl)
    },
    // 查找
    search(params){
        return axios.get(base.BaseUrl+base.searchUrl,{params})
    },
    // 详情页
    detail(params){
        return axios.get(base.BaseUrl+base.detail,{params})
    },
    // 登录界面
    login(params){
        return axios.post(base.BaseUrl+base.login,params)
    },

    // 评价界面
    comment(params){
        return axios.get(base.BaseUrl+base.comment,{params})
    },
    // 订单评价
   commentOrder(params){
    return axios.get(base.BaseUrl+base.commentOrder)
    },
    // 提交评价
    submitComment(params){
        return  axios.post(base.BaseUrl+base.submitComment,params)
    }
}
export default api