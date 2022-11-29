import React from 'react'
import "../Item/style.less"
import Star from '../../../../components/Star/Star'

// 用于实现评价等级的星星功能
export default function Item(props) {
    const data=props.data
  return (
    <div className="comment-item">
    <h3>
        <i className="iconfont icon-wodexuanzhong"></i>
        {data.username}
    </h3>
    <Star data={props.data}/>
    <p>{ data.comment }</p>
</div>
  )
}
