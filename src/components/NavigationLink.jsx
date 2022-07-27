import React from 'react'

function NavigationLink(props) {

    const {item,} = props


  return (
    <React.Fragment>
         <a  href={item.link} className={` menu-link`}> 
         <li>
            <div className="fill-link"></div>
            {item.content}
        </li>
            </a>
    </React.Fragment>
  )
}

export default NavigationLink