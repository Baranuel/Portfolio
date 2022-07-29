import React, {useState, useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {faBars}  from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap'




function NavigationToggle(props) {

  const [lastScrollY, setLastScrollY] = useState()
  const [navVisible, setNavVisible] = useState(false)

  useEffect( () => {
    if(!navVisible) {
      gsap.to(".navigation-toggle", {
        yPercent:-150,
        duration: 0.25
      })
    } else {
      gsap.to(".navigation-toggle", {
        yPercent:0,
        duration: 0.25,
      })
    }

  },[navVisible])

  const checkOffSet = () => {
    if( window.scrollY   > lastScrollY ) {
      setNavVisible(false)
    } else { setNavVisible(true)}
    setLastScrollY(window.scrollY  )
}

 useEffect( () => {

  window.addEventListener('scroll', checkOffSet)

  return () => {
    window.removeEventListener("scroll", checkOffSet)
  }

 },[lastScrollY])

 console.log(navVisible)
 console.log("page offset state " + lastScrollY)

const {toggle} = props
  return (
    <React.Fragment>

        <div onClick={toggle} className='navigation-toggle'>
        <FontAwesomeIcon className='nav-icon'  icon ={faBars} size="3x" />
      </div>
      
    </React.Fragment>
  )
}

export default NavigationToggle