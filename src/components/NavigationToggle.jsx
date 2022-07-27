import React, {useState, useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {faBars}  from '@fortawesome/free-solid-svg-icons'




function NavigationToggle(props) {

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