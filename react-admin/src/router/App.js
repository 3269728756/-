import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import City from "../pages/City/City"
import Layout from '../pages/Main/Layout'
import Search from "../pages/Search/Search"
import Detail from "../pages/Detail/Detail"
import Login from '../pages/Login/Login'
import Order from '../pages/Order/Order'
import "../assets/css/iconfont.css"

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/city" element={<City/>}></Route>
        <Route path="/search/:keywords" element={<Search/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/*" element={<Layout/>}></Route> 
        </Routes>
    </BrowserRouter>
  )
}
