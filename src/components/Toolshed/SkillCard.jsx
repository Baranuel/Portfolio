import React from 'react'

function SkillCard(props) {

    const {image, title} = props
  return (
    <div className='skill-card'>
        <div className='skill-card-cover'>
            <h1>{title}</h1>
            <img src={image} alt="" />
        </div>
        <div className='skill-card-content'>
        <h3>Development</h3>
        <h3>Design</h3>
        </div>
    </div>
  )
}

export default SkillCard