import React from 'react'
import {NavLink} from "react-router-dom"
import "./css/BottomNav.css"

// 公共底部
export default function BottomNav() {
  return (
    <div className='nav-footer'>
        <ul className="clear-fix">
            <li>
                <NavLink to="/*">
                <i className="iconfont icon-shouye"></i>
                <span>首页</span>
                </NavLink>
            </li>
            <li>
                <NavLink  to="/life">
                <i className="iconfont icon-x"></i>
                生活服务
                </NavLink>
            </li>
            <li>
                <NavLink to="/shop">
                <i className="iconfont icon-shangcheng"></i>
                <span>商城</span>
                </NavLink>
            </li>
            <li>
                <NavLink  to="/user">
                <i className="iconfont icon-wodexuanzhong"></i>
                <span>我的</span>
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
