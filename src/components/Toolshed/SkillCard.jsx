import React, {useEffect, useState} from 'react'


function SkillCard(props) {
  
  const {image, title, skills} = props



    const displayDevelopment = skills.development.map( skill => {

      return  <li className='skill-list-item'>
                  <img src={skill.image} alt="" />
                  <h4>{skill.name}</h4>
              </li>
      
    })

    const displayDesign = skills.design && skills.design.map ( skill => {
      return <li className='skill-list-item'>
                <img src={skill.image} alt="" />
                <h4>{skill.name}</h4>
            </li>
    })


  return (
    <div className='skill-card'>
        <div className='skill-card-cover'>
            <h1>{title}</h1>
            <img src={image} alt="" />
        </div>
        <div className='skill-card-content'>
        <div>
          <h3>Development</h3>
          <ul className='skill-list'>
            {displayDevelopment}
          </ul>
        </div>
        {skills.design && 
        <div>
          <h3>Design</h3>
          <ul className='skill-list'>
            {displayDesign}
          </ul>
        </div>
        }
        </div>
    </div>
  )
}

export default SkillCard