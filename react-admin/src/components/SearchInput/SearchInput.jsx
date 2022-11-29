import React,{useState,useEffect,useRef} from 'react'
import {useNavigate,useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import * as searchAction from "../../redux/actions/search"
import "./css/style.css"
// 搜索框
export default function SearchInput(props) {
    const [keyWords,setKeywords]=useState("")
    const navigate=useNavigate()
    const params=useParams()
    const searchKey=useRef()
    // 创建dispatch用于分发更新状态，以及select接收redux中的数据
    const dispatch=useDispatch()
    const secondKeyWords=useSelector(state=>state.search)
 
    // 用于获取用户动态输入的数据
    const change=(event)=>{
        setKeywords(event.target.value)
    }
       // 创建键盘按下事件，用于判断是否进行跳转以及dispatch分发
    const handleKey=(event)=>{
    if(keyWords.length>0){
        if(event.keyCode===13){
            navigate(`/search/${keyWords}`)
            // dispatch(searchAction.updateSearch(keyWords))
        }
    }
        
}
useEffect(()=>{
    // 判断路由中是否携带keyWords参数，若存在则将其分发到action并进行处理
    if(params.keywords){
        dispatch(searchAction.updateSearch(params.keywords))
    }else{
        dispatch(searchAction.updateSearch(""))
    }
    // 从redux中提取数据更新keywords
    setKeywords(secondKeyWords.search)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[secondKeyWords.search,params.keywords])
    
  return (
    <input className="search-input" type="text"
    onKeyUp={handleKey} value={keyWords}
    onChange={change} ref={searchKey}/>
  )
}
