import React from 'react';
import { Carousel } from 'antd';

// 轮播图
const img={
    width:"100%",
}
const Swiper = (props) => (
  <div style={{options:"relative"}}>
    <Carousel autoplay>
      {
        props.banners.map((item,index)=>{
          return (
                  <div key={index}>
                  <img src={item} alt=""  style={img}/>
                  </div >
                )
          })
      }
    
  </Carousel>

  </div>

);
export default Swiper;