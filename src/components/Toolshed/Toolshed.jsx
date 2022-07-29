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
      
    const cardsCoverM = gsap.utils.toArray('.cover-mobile')
    const cardsContentM = gsap.utils.toArray('.content-mobile')


    cardsCoverM.forEach(card => {
      gsap.fromTo(card,{
        yPercent: 50
      },
      {
        scrollTrigger: {
          trigger: card,
          start:"top 10%",
          scrub:true,
          end:"top 10%",

        },
        yPercent: 35,
        boxShadow: "4px 0 8px -2px rgb(24, 24, 24)"
      })
    })

    cardsContentM.forEach(cardC => {

      gsap.fromTo(cardC,{
        yPercent: -50
      },
      {
        scrollTrigger: {
          trigger: cardC,
          start:"top 25%",
          scrub:true,
          end:"top 25%",
        },
        yPercent: 25,


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




  return (
    <div id="skills"className='front-page-toolshed'>
        <div  className='toolshed-wrapper'>
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