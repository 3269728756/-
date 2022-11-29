import React from 'react'
import {Link} from "react-router-dom"
import SearchInput from '../SearchInput/SearchInput'
import  "./css/index.css"
export default function HeaderNav(props) {
  return (
    <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
            <Link to="/city">
            <span>{props.cityName}</span>
            <i className="iconfont icon-downforward"></i>
            </Link>
            
        </div>
        <div className="home-header-right float-right">
          <Link to="/order">
          <i className="iconfont icon-gouwuche"></i>
          </Link>
       
        </div>
        <div className="home-header-middle">
            <div className="search-container">
             <i className="iconfont icon-fangdajing"></i>
            <SearchInput/>
             </div>
        </div>
    </div>
  )
}
