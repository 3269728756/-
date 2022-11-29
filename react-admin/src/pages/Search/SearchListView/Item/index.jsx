import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { loadImageAsync } from '../../../../utils/loadImg'
// 数据未请求到时渲染该图片
import DefaultImg from "../../../../assets/images/default.png"
import "../Item/style.less"

// 将通过mokjs模拟的数据呈现在页面
export default function Item(props) {
    const [currentImg,setCurrentImg]=useState(DefaultImg)
    // 得到动态模拟的数据
    const data=props.data
    loadImageAsync(data.img).then(res=>{
        setCurrentImg(res)

    }).catch(error=>{
        console.log(error+"图片渲染错误")
    })
    return (
        <div className="list-item">
        <Link to={`/detail/${data.id}`}>
        <img src={currentImg} alt="" />
        <div className="mask">
            <div className="left">
                <p>{data.title}</p>
                <p>{data.houseType}</p>
            </div>
            <div className="right">
                <div className="btn">
                    {data.rentType}
                </div>
                <p dangerouslySetInnerHTML={{ __html:data.price + "元/月" }}></p>
            </div>
        </div>

        </Link>
    </div>
  )
}
