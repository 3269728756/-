import React,{useEffect,useState} from 'react'
import DetailView from "../DetailView/DetailView"
import api from "../../../api/index"
export default function DetailList(props) {
    
    const [currentDetail,setCurrentDetail]=useState([])
    useEffect(()=>{
        api.detail({id:props.id}).then((res)=>{
            if(res.status===200){
            //    将当前宾馆的详情信息传递给currentDetail
                setCurrentDetail(res.data)
                
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   
   
  return (
    <div>
        {currentDetail.imgs?<DetailView currentDetail={currentDetail} id={props.id}/>
            :<div>等待数据加载中...</div>
        }

    </div>
    
  )
}
