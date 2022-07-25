import React from 'react'

import github from '../assets/images/contact-icons/github.svg'
import facebook from '../assets/images/contact-icons/facebook.svg'
import linkedin from '../assets/images/contact-icons/linkedin.svg'

function Footer() {

    const icons = [{link:"https://github.com/Baranuel", img: github}, {link:"https://www.facebook.com/samuel.baran", img: facebook},{link:"https://www.linkedin.com/in/samuel-baran-1706a9225/", img: linkedin}]

    const contactIcons = icons.map( (icon, index) => {
        return <a href={icon.link} target="blank" key={index}><img src={icon.img} alt="" /></a>
    })
  return (
    <div className='footer' >
        <div className="footer-wrapper">
            <p><strong>Designed and built by Samuel Baran</strong></p>
            <div className='icons'>
            {contactIcons}
            </div>
        </div>
    </div>
  )
}

export default Footer