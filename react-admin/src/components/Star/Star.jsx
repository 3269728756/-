import React from 'react'
import "../Star/style.less"

// 星星级数
export default function Star(props) {
  // 创建该数组以便于实际的number作比较
    const arr=[1,2,3,4,5]
    const number=props.data.star
  return (
    <div className='star-container'>
        {
           arr.map((element,index)=>{
                return number>=element?<i key={index} className={"iconfont icon-xingxing light"}></i>
                                    :<i key={index} className={"iconfont icon-xingxing"}></i>
            })
        }

    </div>
  )
}
