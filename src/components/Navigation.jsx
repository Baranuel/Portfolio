import React, {useState,useEffect} from 'react'

import MenuGridBg from './MenuGridBg'
import NavigationLink from './NavigationLink'

function Navigation(props) {

  
    const {navIsOpen} = props

    const links = [{id:1,content:"About me", link:""},{id:2,content:"My Work", link:""},{id:3,content:"Skills", link:""},{id:4,content:"Contact", link:""},]
    const [activeIndex, setActiveIndex]= useState(0)
    const [hoveredLink, setHoveredLink] = useState(false)

    const changeHover = id => {
    links.map((item) => {
         item.id === id && setHoveredLink(item)  
      })
    }

   console.log(hoveredLink)

    const renderLinks = links.map((item, index) => {
        return <NavigationLink item={item} key={index} />
    })


    const mountedStyle = { pointerEvents: "auto" };
    const unmountedStyle ={ pointerEvents: "none"}

    // useEffect( () => {

    //     switch(activeIndex){
    //         case 0 :
    //           document.documentElement.style.setProperty('--bgPos', "0% -100%");
    //           break;
    //         case 1 :
    //           document.documentElement.style.setProperty('--bgPos', "0% -125%");
    //           break;
    //         case 2 :
    //           document.documentElement.style.setProperty('--bgPos', "0% -150%");
    //           break;
    //         case 3 :
    //           document.documentElement.style.setProperty('--bgPos', "0% -175%");
    //           break;
    //         default:
    //           document.documentElement.style.setProperty('--bgPos', "0% 0%");


    //     }


    // },[activeIndex])

  return (
    <div style={navIsOpen ? mountedStyle : unmountedStyle} className='navigation'>    
       <MenuGridBg navIsOpen={navIsOpen} />
        {navIsOpen && <div className='menu-items'>
            <ul >
               {renderLinks}
               {/* <div className='menu-pattern'></div> */}
            </ul>
        </div> } 
    </div>
  )
}

export default Navigation