import React from 'react'
import {useNavigate} from "react-router-dom"
import SearchInput from "../../../components/SearchInput/SearchInput"
import "../SearchHeader/style.less"

export default function SearchHeader() {
  // 点击返回按钮跳转到上一个页面
    const navigate=useNavigate();
    const backHandle=()=>{
        navigate(-1)
    }
  return (
    <div id="search-header" className="clear-fix">
    <span className="back-icon float-left" onClick={ backHandle }>
        <i className="iconfont icon-back"></i>
    </span>
    <div className="input-container">
        <i className="iconfont icon-fangdajing"></i>
        <SearchInput />
    </div>
</div>
  )
}
