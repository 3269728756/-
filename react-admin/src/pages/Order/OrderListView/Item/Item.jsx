import React,{useState,useEffect,useRef} from 'react'
import api from '../../../../api'
import "../Item/style.less"

export default function Item(props) {

    const [currentComment,setCurrentCommen]=useState()
    const ref=useRef()
    const data=props.data
//    页面初始化渲染时，将接口中的数据存储到状态currentComment中
    useEffect(()=>{
        setCurrentCommen(data.commentState)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
//    点击评价时，将状态设置为1正在评价中
    const clickHandle=()=>{
        setCurrentCommen(1)
    }
    // 点击提交时，将状态修改为2已提交
    const subHandle=()=>{
        api.submitComment({
            id:data.id,
            username:props.user.nick,
            content:ref.current.value
        }).then(res=>{
            if(res.status===200){
                // 若接口响应成功，便设置为已收藏状态
                setCurrentCommen(2)
               
               props.onchan(props.index)
           
                
            }else{
                setCurrentCommen(0)
            }
        })
        
    }
    
    // 点击取消时，将状态设置为0未收藏状态
    const cancelHandle=()=>{
        setCurrentCommen(0)
    }
   
    return (
    
        <div className="order-item-container clear-fix">
            <div className="order-item-img float-left">
                <img src={data.img} alt="" />
            </div>
            <div className="order-item-comment float-right">
                {
                    currentComment === 0 ?
                        <button onClick={clickHandle} className="btn">评价</button>
                        : currentComment === 1 ? ''
                            : <button className="unseleted-btn btn" disabled>已评价</button>
                }
                
            </div>
            <div className="order-item-content">
                <span>商户：{data.title}</span>
                <span>类型：{data.houseType}</span>
                <span>价格：{data.price}</span>
            </div>
            {
                currentComment === 1 ?
                    <div className="comment-text-container">
                        <textarea ref={ref}  className="comment-text" style={{ width: "100%", height: '80px' }}></textarea>
                        <button onClick={subHandle} className="btn">提交</button>
                        <button onClick={cancelHandle}  className="btn unseleted-btn">取消</button>
                    </div>
                    : ""
            }
            
        
        </div>
       
   
    
  )
}
