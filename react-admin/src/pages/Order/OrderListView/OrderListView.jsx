import React from 'react'
import Item from './Item/Item'
import "../OrderListView/style.less"

// 将得到的订单数据动态渲染到页面
export default function OrderListView(props) {

  const handleChange=(index)=>{
      props.onchan(index)
    
  }

  const againComment=()=>{
    localStorage.setItem("ind" ,[])
    // eslint-disable-next-line array-callback-return
    props.data.map((item,index)=>{
      props.data[index].commentState=0
      
    })
  }
    return (
    <div>
        {
            props.data.map((element,index)=>{
                return <Item key={index} data={element} user={props.user} index={index} onchan={handleChange}/>
            })
        }
        <button className='again' onClick={againComment}>重新评价</button>
        
    </div>
  )
}
