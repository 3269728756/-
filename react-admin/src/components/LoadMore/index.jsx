import React,{useEffect,useRef,useState} from 'react'
import "../LoadMore/style.less"

// 加载更多
export default function LoadMore(props) {
  // 创建ref对象
  const ref=useRef()
  const [loadup,setLoadup]=useState(10000)
  
  useEffect(()=>{
    // 得到页面的高度
    let winHeight=document.documentElement.clientHeight
      let timer;
      // 监听滚动事件
    window.addEventListener("scroll",()=>{
      if(ref.current){
        setLoadup(ref.current.getBoundingClientRect().top)
        if(timer){
          clearTimeout(timer)
        }else{
          timer=setTimeout(() => {
            if(winHeight>loadup){
              props.onloadmore()
            }
          }, 100);
        }
      }
    })

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loadup])
  return (
    <div ref={ref} className="load">加载更多...</div>
  )
}
