import React from 'react'
import LoginView from './LoginView/LoginView'
import {useDispatch} from "react-redux"
import * as loginActions from "../../redux/actions/login"
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handlelogin=(user)=>{
    
    dispatch(loginActions.setlogin(user))
    // 将得到的用户信息存储到本地内存中（解决刷新重新登陆问题）
    localStorage.setItem('future',JSON.stringify(user))
    navigate(-1)
  }
  return (
    <div>
        <LoginView onLevent={handlelogin}/>
    </div>
  )
}
