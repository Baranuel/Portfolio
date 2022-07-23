import React, {useEffect} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import SkillCard from './SkillCard'

import cardCover1 from '../../assets/images/card-cover-1.svg'
import cardCover2 from '../../assets/images/card-cover-2.svg'

import skills from '../../skills'

function Toolshed() {

  useEffect( () => {

    const cardsCover = gsap.utils.toArray('.skill-card-cover')
    const cardsContent = gsap.utils.toArray('.skill-card-content')
    gsap.registerPlugin(ScrollTrigger);


    cardsCover.forEach(card => {
      gsap.fromTo(card,{
        xPercent: 30
      },
      {
        scrollTrigger: {
          trigger: card,
          start:"top 60%",
          scrub:true,
          end:"top 60%"
        },
        ease:"ease",
        xPercent:0,
        duration: 0.3,
        boxShadow: "4px 0 8px -2px rgb(24, 24, 24)"
      })
    })

    cardsContent.forEach(card => {

      gsap.fromTo(card,{
        xPercent: -70
      },
      {
        scrollTrigger: {
          trigger: card,
          start:"top 60%",
          scrub:true,
          end:"top 60%"
        },
        ease:"ease-in",
        xPercent:-5,


      })
    })


  },[])


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