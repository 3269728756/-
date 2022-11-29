import React from 'react'
import {useNavigate} from "react-router-dom"
import PubHeader from "../../components/PubHeader/PubHeader"
import CurrentCity from './CurrentCity/CurrentCity'
import CityList from './CityList/CityList'
import {useDispatch,useSelector} from "react-redux"
import {changeCity} from "../../redux/actions/city"
import Citys from './Citys/Citys'

export default function City() {
  // 创建dispatch用于分发action
  const dispatch=useDispatch()
  // 用于接收redux中存储的city数据
  const city=useSelector(state=>state.city)
  const navigate=useNavigate()
  const getCity=(city)=>{
    dispatch(changeCity(city))
    navigate("/")
    
     
  }
  return (
    <div>
      <PubHeader title="城市选择"/>
      <CurrentCity city={city.cityName}/>
      <CityList onChange={getCity}/>
      <Citys onChange={getCity}/>
    </div>
  )
}
