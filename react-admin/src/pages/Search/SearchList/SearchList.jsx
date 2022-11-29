import React,{useEffect,useState} from 'react'
import SearchListView from '../SearchListView/SearchListView'
import api from "../../../api/index"
import LoadMore from '../../../components/LoadMore'

export default function SearchList(props) {
    const [searchData,setSearchData]=useState([])
    // 是否加载更多，即循环加载
    const [hasMore,setHasMore]=useState(false)
    // 创建用于响应search接口的函数
    const http =()=>{
        api.search({search:props.search}).then((res,req)=>{
            if(res.status===200){
                // 接口请求成功时，更新页面数据以及允许加载更多
                setSearchData(searchData.concat(res.data.result.data))
                setHasMore(res.data.result.hasMore) 
                 }
            })
        }
    
    useEffect(()=>{
       http()
       return ()=>{
        // 页面搜索框内容发生变化时，清空页面数据以及阻止加载更多
        setSearchData([])
        setHasMore(false)
       }
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.search])
    const loadmore=()=>{
        http()
    }
    
  return (
    <div>
        {
            searchData.length>0? <SearchListView search={searchData}/>:<div></div>
            
        }
        {hasMore?<LoadMore onloadmore={loadmore}/>:<div>已经加载到底部</div>}
     
    </div>
  )
}
