import React,{ useState } from "react"
import "./style.less"

// Tabs标签
const Tabs = (props) =>{

    const [ currentIndex,setCurrentIndex ] = useState(0)
    // 利用index用于动态更新的点击事件
   const tabHandle=(index)=>{
    setCurrentIndex(index)
   }
//    根据判断对不同标签应用不同样式
    const getClass=(index)=>{
        return index===currentIndex? 'Tab_title active' : 'Tab_title'
    }

    return(
        <div>
            <ul className="Tab_title_wrap">
                {
                    React.Children.map(props.children,(element,index) =>{
                        return <li onClick={() =>tabHandle(index) } className={getClass(index)} key={index}>{ element.props.label }</li>
                    })
                }
            </ul>
            <div>
                {
                    React.Children.map(props.children,(element,index) =>{
                        return (
                            <div>
                                { currentIndex===index?element.props.children:"" }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tabs