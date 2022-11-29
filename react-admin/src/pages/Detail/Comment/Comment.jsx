import React,{useState,useEffect} from 'react'
import CommentView from '../CommentView/CommentView'
import api from '../../../api'
import LoadMore from "../../../components/LoadMore/index"


export default function Comment(props) {
    const [comment,setComment]=useState([])
    const [hasMore,setHasMore]=useState(false)
    
    // 创建用于响应评价接口的函数
    const http=()=>{
        api.comment({id:props.id}).then(res=>{
            if(res.status===200){
                // 若接口响应成功，则将评价信息动态渲染的页面，并且实现加载更多功能
                setComment(comment.concat(res.data.result.data))
                setHasMore(res.data.result.hasMore)
            }
        })
    }
// 页面初始渲染时所渲染评价信息
    useEffect(()=>{
        http()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // 调用http用于实现加载更多
    const handleLoad=()=>{
        http()
    }

  return (
    <div>
        {
            comment.length>0?<CommentView data={comment}/>
                :<div>等待数据中...</div>
        }
        {
            hasMore?<LoadMore onloadmore={handleLoad}/>
            :<div>已到底部，数据加载完成</div>
        }
        
    </div>
  )
}
