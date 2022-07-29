import React, {useEffect} from 'react'
import gsap from 'gsap'
import { stagger } from 'animejs'

function NavigationLink(props) {

    const {item, navIsOpen, isMobile, toggle} = props
    useEffect( () => {

        gsap.from('.menu-link', {
            x: 100,
        })
        gsap.to('.menu-link', {
            x: 0,
            stagger: 0.2,
            opacity: 1,
            delay: isMobile ? 0.4 : 0.5,
            duration: 0.5
        })
    },[navIsOpen])
    

  return (
    <React.Fragment>
         <a onClick={toggle}  href={item.link} className={`menu-link`}> 
         <li>
            <div className="fill-link"></div>
            {item.content}
        </li>
            </a>
    </React.Fragment>
  )
}

export default NavigationLink