// 利用该文件对模块进行分割，
const express= require("express")
const router=express.Router()
const homehot=require("./data/home/homehot")
const  detailData=require("./data/details/index")
const orderData=require("./data/order/index")
const url=require("url")
const Mock=require("mockjs")
const commentData = require("./data/comment/index")



const Random=Mock.Random;

// 房屋热点界面
router.get("/home/hot1",(req,res)=>{
    const cityName=url.parse(req.url,true).query.cityName
    res.send({
        status:200,
        result:homehot.hot1,
        city:cityName
    })
})
router.get("/home/hot2",(req,res)=>{
    const cityName=url.parse(req.url,true).query.cityName

    res.send({
        status:200,
        result:homehot.hot2,
        city:cityName
    })
})

// 搜索界面
router.get("/search",(req,res)=>{
    const search=url.parse(req.url,true).query.search
    let data=Mock.mock({
        hasMore:true,
        "data|5":[{
            "id|+1":Random.integer(),
            title:Random.csentence(5,8),
            houseType:"17/21|4室一厅 - 273.97㎡",
            price:"<h3>660000</h3>",
            rentType:Random.cword(2),
            img:Random.image("800x600",Random.color(),"#FFF","png","宜居，品质享受")

        }]
    })
    res.send({
        status:200,
        result:data

    })
})
// 详情界面
router.get("/detail",(req,res)=>{
    const id=url.parse(req.url,true).query.id
    res.send(detailData)
})
// 登录
router.post("/login",(req,res)=>{
    const {username,password}=req.body
    if(username&&password){
        res.send({
            status:200,
            token:"2k3uetgsdef23iuyt367tsyessh",
            username
        })
    }else{
        res.send({
            status:400,
            msg:"用户名或密码错误，请重新登陆"
        })
    }
})

// 评价界面
router.get("/comment",(req,res)=>{
    const id=url.parse(req.url,true).query.id
    res.send({
        status:200,
        result:commentData,

    })

})
// 订单评价
router.get("/order/comment",(req,res)=>{
    const username=url.parse(req.url,true).query.username
    res.send({
        status:200,
        result:orderData
    })
})
// 订单评价提交
router.post("/order/submit/comment",(req,res)=>{
    const {username,id,content}=req.body
    res.send({
        msg:"评价成功",
        status:200
    })
})
module.exports=router;
