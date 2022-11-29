import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home"
import Life from "./Life"
import Shop from "./Shop"
import User from "./User"
import BottomNav  from "../../components/BottomNav/BottomNav"
export default function Layout(props) {
  return (
    <div>
          <BottomNav/>
            <Routes>
            <Route  path="/*" element={<Home/>}></Route>
            <Route path="/life" element={<Life/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            
            </Routes>
    </div>
   
  )
}
