// 该文件用于创建自己动态设置的城市名称
import React from 'react'
import "./style.less"
export default function CityList(props) {
    
    const cityarr=["西安","渭南","商洛","汉中","咸阳","宝鸡","铜川","安康","延安","榆林","华阴","韩城"]
    const clickCityHandle=(cityname)=>{
        props.onChange(cityname.item)
        
    }
    return (
    <div className="city-list-container">
        <h3>热门城市</h3>
        <ul className="clear-fix">
            {
            cityarr.map((item,index)=>{
                return <li onClick={ () => clickCityHandle({item}) } key={index}><span>{item}</span></li>
            })
            }
        </ul>
    </div>
  )
}
