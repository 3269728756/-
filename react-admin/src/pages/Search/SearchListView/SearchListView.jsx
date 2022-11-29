import React from 'react'
import Item from "./Item/index"

export default function SearchListView(props) {
  //  将得到的所有动态列表渲染到search页面
  return (
    <div>
        {
            props.search.map((element,index)=>{
                return <Item data={element} key={index}></Item>
            })
        }
    </div>
  )
}
