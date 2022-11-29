
import React from 'react'
import "../Usin/style.less"


export default function Usin(props) {
  
  return (
      <div className="userinfo-container">
            <p>
                <i className="iconfont icon-wodexuanzhong"></i>
                <span>{props.user.username}</span>
               
            </p>
            <p>
                <i className="iconfont icon-weizhi"></i>
                <span>{props.city.cityName}</span>
            </p>
       </div>
       )
}
