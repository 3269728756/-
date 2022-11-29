import React from 'react'
import {useParams} from "react-router-dom"
import DetailList from './DetailList/DetailList'

export default function Detail() {
  // 得到路由传递的id参数
  const params=useParams()
  
  return (
    <div>
      <DetailList id={params.id}/>
    </div>
  )
}
