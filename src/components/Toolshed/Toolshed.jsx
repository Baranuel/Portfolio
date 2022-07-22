import React from 'react'
import SkillCard from './SkillCard'

import cardCover1 from '../../assets/images/card-cover-1.svg'
import cardCover2 from '../../assets/images/card-cover-2.svg'

function Toolshed() {
  return (
    <div className='front-page-toolshed'>
        <div className='toolshed-wrapper'>
        <SkillCard image={cardCover1} title={"Experienced"} />
        <SkillCard image={cardCover2} title={"Learning"} />
        </div>
    </div>
  )
}

export default Toolshed