import React from 'react'
import {useParams} from "react-router-dom"
import SearchHeader from './SearchHeader'
import SearchList from './SearchList/SearchList'

export default function Search() {
  // 通过接收路由参数得到当前动态输入的数据
  const params=useParams()
  return (
    <div>
      <SearchHeader/>
      <SearchList search={params.keywords}/>
    </div>
  )
}
