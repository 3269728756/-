import React from 'react'
import BuyAndStoreView from '../BuyAndStoreView/BuyAndStoreView'
import {useSelector} from "react-redux"
import "../BuyAndStore/style.less"

export default function BuyAndStore(props) {
  // 从redux存储中取出login和user数据，并将其与id一同传给子组件View
  const login=useSelector(state=>state.login)
  const collects=useSelector(state=>state.collect)
  return (
    <div className="buy-and-store">
        <BuyAndStoreView user={login.user} collects={collects} id={props.id}/>
    </div>
  )
}
