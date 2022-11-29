import React,{useState,useEffect} from 'react'
import "../BuyAndStoreView/style.less"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import * as collectActions from "../../../redux/actions/collect"

export default function BuyAndStoreView(props) {
 
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [collect,setCollect]=useState(true)
 
  // 用于判断是否对详情信息进行收藏，false为为收藏，true为已收藏
  const isStore=()=>{
    // 将collects与路由id做对比，并得到结果
    const collects=props.collects
    const id=props.id
    // 将对比的结果返回给isStore,以便isStore函数进行判断收藏与未收藏
    return collects.some(item=>{
      return item===id
    })
  }
  // 页面初始渲染时显示酒店的收藏状态
  useEffect(()=>{
    setCollect( isStore())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const collectHandle=()=>{
    if(props.user.token){
      if(isStore()){
        setCollect(true)
        dispatch(collectActions.unCollect(props.id))
      }else{
        setCollect(false)
        dispatch(collectActions.setCollect(props.id))
      }

    }else{
      navigate("/login")
    }
  }

  

  return (
   
    <div className="buy-store-container clear-fix">
        <div className="item-container float-left">
          {
            !collect?<button className="selected o" onClick={collectHandle}>已收藏</button>
            :<button className="selected " onClick={collectHandle}>收藏</button>
          }
             
        </div>
         <div className="item-container float-right">
             <button className="selected">购买</button>
         </div>
    </div >
  )
}
