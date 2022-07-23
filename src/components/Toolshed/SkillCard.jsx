import React, {useEffect, useState} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function SkillCard(props) {
  
  const {image, title, skills} = props


  useEffect( () => {

    const cardsCover = gsap.utils.toArray('.skill-card-cover')
    const cardsContent = gsap.utils.toArray('.skill-card-content')
    


    cardsCover.forEach(card => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start:"top 60%",
          scrub:true,
          end:"top 60%"
        },
        ease:"ease",
        x:0,
        duration: 0.3,
        boxShadow: "4px 0 8px -2px rgb(24, 24, 24)"
      })
    })

    cardsContent.forEach(card => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start:"top 60%",
          scrub:true,
          end:"top 60%"
        },
        ease:"ease",
        x:"-5%",
        duration: 0.3
      })
    })


  },[])

  gsap.registerPlugin(ScrollTrigger);

  console.log(skills.design)

  

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