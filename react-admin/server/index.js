const express =require("express")
const app=express()
// 方便根据路由去切割模块，避免将模块都写在入口文件
const router =require("./router")
// 引入cors,解决跨域，为响应提供预检请求
const cors =require("cors")
// 请求体解析的中间件，可以解析大部分格式的请求体
const bodyParse=require("body-parser")

app.use(bodyParse.urlencoded({
    extended:true
}))
app.use(cors())
app.use("/api",router)
app.listen(5000,()=>{
    console.log("5000端口监听中,服务器启动成功")
})