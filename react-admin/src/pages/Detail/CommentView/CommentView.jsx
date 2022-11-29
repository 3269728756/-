import React from 'react'
import "../CommentView/style.less"
import Item from './Item/Item'


export default function CommentView(props) {
    // 从父组件中接收到评价内容的具体信息，并将其动态渲染到页面
    const data=props.data
  return (
    <div className='comment-list'>
        <ul>
            <li>
                {
                    data.map((element,index)=>{
                        return <Item data={element} key={index}/>
                    })
                }
            </li>
        </ul>
        
    </div>
  )
}
