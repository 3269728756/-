// 该文件用于与包含所有城市的接口响应，并渲染出所有的城市名称
import React,{useState,useEffect} from 'react'
// 引入全部城市的接口
import CitySelect from 'react-city-select';
import cityData from "../../../data/data"
import api from "../../../api/index"
import "./style.less"

export default function Citys(props) {
    const [data,setData]=useState(cityData)
    const handleSelectCity=(data)=>{
      // 将城市mingcheng传回给父组件
        props.onChange(data.name)
    }
    useEffect(()=>{
        api.getCitys().then((res)=>{
            if(res.status===200){
                setData(res.data.result.citylist)
            }
        })
    })
  return (
    <div>
        <h3>城市列表</h3>
        <CitySelect
        // 传入数据
        data={data}
        // 传入回调
        onSelectItem={handleSelectCity}>
      </CitySelect>
    </div>
   
  )
}
