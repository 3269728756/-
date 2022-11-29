import React,{useEffect} from 'react'
import Usin from './Usin/Usin'
import PubHeader from '../../components/PubHeader/PubHeader'
import OrderList from './OrderList/OrderList'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
export default function Order() {
  
    const navigate=useNavigate()
    // 从redux中取出city和user数据
    const city=useSelector(state=>state.city)
    const user=useSelector(state=>state.login.user)

    useEffect(()=>{
        // 初始化渲染页面时，判断是否有用户数据，若无则跳转到登陆界面
        if(!user.token){
            navigate("/login")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
    <div>
        <PubHeader title="订单管理"/>
        <Usin city={city} user={user}/>
        <OrderList user={user}/>
    </div>
  )
}
