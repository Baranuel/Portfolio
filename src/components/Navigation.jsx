import React, {useState,useEffect} from 'react'

import MenuGridBg from './MenuGridBg'
import NavigationLink from './NavigationLink'

import gsap from 'gsap'   

function Navigation(props) {

    const [isMobile, setIsMobile] = useState(false)
    const {navIsOpen, toggle} = props
    const links = [{id:1,content:"About me", link:"#about"},{id:2,content:"My Work", link:"#work"},{id:3,content:"Skills", link:"#skills"},{id:4,content:"Contact", link:"#contact"},]

    useEffect( () => {
      window.innerWidth >= 900 ? setIsMobile(false) : setIsMobile(true)

    },[])
 
    useEffect( () => {
      gsap.to('.menu-items', {
        opacity:1,
        delay:isMobile? 0.2 : 0.35,

      })

    },[navIsOpen])

    const renderLinks = links.map((item, index) => {
        return <NavigationLink toggle={toggle} isMobile={isMobile} navIsOpen={navIsOpen} item={item} key={index} />
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
       <MenuGridBg isMobile={isMobile} navIsOpen={navIsOpen} />
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