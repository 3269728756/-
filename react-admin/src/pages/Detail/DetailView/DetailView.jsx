import React from 'react'
import PubHeader from '../../../components/PubHeader/PubHeader'
import Swiper from '../../../components/Swiper/Swiper'
import "../DetailView/style.less"
import BuyAndStore from '../BuyAndStore/BuyAndStore'
import Tab from "../../../components/Tabs/index"
import Comment from '../Comment/Comment'

export default function DetailView(props){

    // 将得到的当前酒店的详情信息动态渲染到界面
   const currentDetail=props.currentDetail
  return (
    <div>
        {/* 公共头 */}
        <PubHeader title="详情页"/>
            <div>
                {/* 轮播图 */}
                 <Swiper banners={currentDetail.imgs}/>
                 <Tab>
                 <div label="详情" >
                        <div className="detail-info">
                            <h3>{currentDetail.title}</h3>
                            <div className="box">
                                <ul>
                                    <li>
                                        <span>{currentDetail.price} /月</span>
                                        <p>租金</p>
                                    </li>
                                    <li>
                                        <span>{currentDetail.info.type}</span>
                                        <p>房屋类型</p>
                                    </li>
                                    <li>
                                        <span>{currentDetail.houseType}</span>
                                        <p>面积</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="info">
                                <div className="info-list">
                                    <p>类型：{currentDetail.info.type}</p>
                                    <p>朝向：{currentDetail.info.orientation}</p>
                                </div>
                                <div className="info-list">
                                    <p>楼层：{currentDetail.info.level}</p>
                                    <p>装修：{currentDetail.info.style}</p>
                                </div>
                                <div className="info-list">
                                    <p>年代：{currentDetail.info.years}</p>
                                </div>
                            </div>
                        </div>
                        <BuyAndStore id={props.id}/>
                </div>
                <div label="评价">
                    <Comment id={props.id}/>
                </div>
                    
                 </Tab>
              
            </div>
        </div>
  )
}
