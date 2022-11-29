import React,{useEffect,useState} from 'react'
import api from "../../../../api/index"
import HomeView from "../HomeView/HomeView"
export default function HomeList(props) {
    const [homehot1,sethomehot1]=useState([])
    const [homehot2,sethomehot2]=useState([])
    const [city,setCity]=useState(props.cityName)
    useEffect(()=>{
        // 与接口响应得到home1列表
        api.getHomehot1({cityName:props.cityName}).then(res=>{
            if(res.data.status===200){
                sethomehot1(res.data.result)
               setCity(res.data.city)
            }
        })
        // 与home2接口响应渲染出ui列表
        api.getHomehot2({cityName:props.cityName}).then(res=>{
            if(res.data.status===200){
                sethomehot2(res.data.result)
                setCity(res.data.city)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  
  return (
    <div>
        {homehot1.length>0?<HomeView data={homehot1} cityName={city} title={"生活日常"}/>:"数据加载中，请稍做等候！"}
        {homehot2.length>0?<HomeView data={homehot2} cityName={city} title={"租房精选"}/>:"数据加载中，请稍做等候！"}

    </div>
  
  )
}
