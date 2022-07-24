import React, {useEffect, useState} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import SkillCard from './SkillCard'
import SkillCardMobile from './SkillCardMobile'

import cardCover1 from '../../assets/images/card-cover-1.svg'
import cardCover2 from '../../assets/images/card-cover-2.svg'

import skills from '../../skills'


function Toolshed() {

  gsap.registerPlugin(ScrollTrigger);

  const horizontalTranslate = () => {

    const cardsCover = gsap.utils.toArray('.skill-card-cover')
    const cardsContent = gsap.utils.toArray('.skill-card-content')


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
  }


  const verticalTranslate = () => {
      
    const cardsCover = gsap.utils.toArray('.cover-mobile')
    const cardsContent = gsap.utils.toArray('.content-mobile')


    cardsCover.forEach(card => {
      gsap.fromTo(card,{
        yPercent: 50
      },
      {
        scrollTrigger: {
          trigger: card,
          start:"top 40%",
          scrub:true,
          end:"top 40%",

        },
        yPercent: 35,
        ease:"ease",
        boxShadow: "4px 0 8px -2px rgb(24, 24, 24)"
      })
    })

    cardsContent.forEach(card => {

      gsap.fromTo(card,{
        yPercent: -50
      },
      {
        scrollTrigger: {
          trigger: card,
          start:"top 45%",
          scrub:true,
          end:"top 45%",
          invalidateOnRefresh: true
        },
        yPercent: 25,
        ease:"ease-in",
        duration: 1.5


      })
    })
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  useEffect( () => {

    windowWidth > 900 ?
    horizontalTranslate() :
    verticalTranslate() 

  },[windowWidth])



  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize',updateWidth )
  },[])

  console.log(windowWidth)


  return (
    <div className='front-page-toolshed'>
        <div className='toolshed-wrapper'>
          {windowWidth > 874 ?
          <React.Fragment>
          <SkillCard skills={skills.experienced} image={cardCover1} title={"Experienced"} />
          <SkillCard skills={skills.learning} image={cardCover2} title={"Learning"} />
          </React.Fragment>
          :
          <React.Fragment>
          <SkillCardMobile skills={skills.experienced} image={cardCover1} title={"Experienced"}/>
          <SkillCardMobile skills={skills.learning} image={cardCover2} title={"Learning"} />
          </React.Fragment>
          }
        </div>
    </div>
  )
}

export default Toolshed