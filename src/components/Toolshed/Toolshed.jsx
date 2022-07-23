import React from 'react'
import SkillCard from './SkillCard'

import cardCover1 from '../../assets/images/card-cover-1.svg'
import cardCover2 from '../../assets/images/card-cover-2.svg'

import skills from '../../skills'

function Toolshed() {


  return (
    <div className='front-page-toolshed'>
        <div className='toolshed-wrapper'>
        <SkillCard skills={skills.experienced} image={cardCover1} title={"Experienced"} />
        <SkillCard skills={skills.learning} image={cardCover2} title={"Learning"} />
        </div>
    </div>
  )
}

export default Toolshed