import React ,{useState}from 'react'
import api from '../../../api'

import validator from "../../../utils/validator"
import classnames from "classnames"
import "../LoginView/style.less"

export default function LoginView(props) {
    const [username,setUser]=useState("")
    const [password,setPass]=useState("")
    const [errors,setErrors]=useState("")
 
   
    // 获得登录信息的函数
    const handleValue=(event)=>{
        if(event.target.name==="username"){
            // 将动态得到的username存储到状态中
            setUser(event.target.value)
        }else if(event.target.name==="password"){
            // 将动态得到的password存储到状态中
            setPass(event.target.value)
        }
    }

    // 提交登陆信息的函数
   
    const handleSubmit=(event)=>{
        // 取消默认行为
        event.preventDefault()
        // 对password和username进行表单验证
        const {isValid,errors}=validator({username,password})
        if(!isValid){
            api.login({
                username,
                password
            }).then((res)=>{
                if(res.status===200){
                    // 将数据传给父级组件
                    props.onLevent(res.data)
                    setErrors({})
                   
                }else{
                    console.log("登陆失败，请重新登录!")
                }
            })
        }else{
            setErrors(errors)
        }
            
        }
  return (
    <div id="login-container">
            <form onSubmit={handleSubmit}>
                <div className={classnames('input-container phone-container',{"input-container-error":errors.username})}>
                    <i className="iconfont icon-shoujihao"></i>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleValue}
                        placeholder="用户名/手机号"
                        
                    />
                     
                </div>
                <div className={classnames('input-container password-container',{"input-container-error":errors.password})}>
                    <i className="iconfont icon-mima"></i>
                    <button>发送验证码</button>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleValue}
                        placeholder="输入验证码"
                        
                    />
                </div>
               
                <button className="btn-login">登录</button>
              
               
                </form>
        </div>
  )
}
