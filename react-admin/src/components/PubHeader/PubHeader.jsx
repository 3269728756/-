import React from 'react'
import "./css/style.css"
import { useNavigate } from 'react-router-dom'

// 公共头部
export default function PubHeader(props) {
    const navigate=useNavigate()
    // 点击回退按钮，返回上一个界面
    const backHeader=()=>{
        navigate(-1)
    }
  return (
    <div id="common-header">
        <span className="back-icon" onClick={backHeader}>
          <i className="iconfont icon-back"></i>
        </span>
        <h1>{ props.title }</h1>
    </div>
  )
}
