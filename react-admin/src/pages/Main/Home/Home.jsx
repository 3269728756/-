import React from 'react'
import HeaderNav  from '../../../components/HeaderNav/HeaderNav'
import Swiper from '../../../components/Swiper/Swiper'
import HomeList from './HomeList/HomeList'
import {useSelector} from "react-redux"
import banner1 from "../../../assets/images/banner1.png"
import banner2 from "../../../assets/images/banner2.png"
import banner3 from "../../../assets/images/banner3.png"
export default function Home() {
  // 取出redux中存储的city数据
  const city=useSelector(state=>state.city)
  return (
    <div>
      <HeaderNav cityName={city.cityName}/>
      <Swiper banners={[banner1,banner2,banner3]}/>
      <HomeList cityName={city.cityName}/>
    </div>
  )
}
