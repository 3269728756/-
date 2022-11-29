
import React,{useEffect,useState} from 'react'
import api from '../../../api'
import OrderListView from '../OrderListView/OrderListView'

export default function OrderList(props) {
    
    const [orderData,setOrderData]=useState([])
    
    let arr=[]
    const handleChange=(index)=>{
        arr.push(index)
   
        localStorage.setItem("ind" ,arr)

       
    }
  
    
    
    useEffect(()=>{
        // 响应订单收集的接口
        console.log(localStorage.getItem("ind"))
       
        let ar=localStorage.getItem("ind")?[...localStorage.getItem("ind")]:[]
                api.commentOrder({username:props.user.nick}).then(res=>{
                    if(ar.length>0){
                        // eslint-disable-next-line array-callback-return
                        ar.map(item=>{
                            if(item>=0){
                               res.data.result[item].commentState=2
                            }
                             
                           })
                    }
                  
                    
                    if(res.status===200){
                        // 接口响应成功后，将接口中的数据存放到orderData状态中
                        setOrderData(res.data.result)
                        
                        }
                })
            
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    
    return (
    <div>
        {
            orderData.length>0?<OrderListView data={orderData} user={props.user} onchan={handleChange}/>
            :<div>等待数据中...</div>
        }
    </div>
  )
}
