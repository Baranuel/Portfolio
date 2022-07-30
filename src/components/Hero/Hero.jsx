import React from 'react'
import ImageDiv from './ImageDiv'

import images from '../../images'

import '../../App.scss'
import '../../styles/global.scss'


function Hero() {


    const imageDivisions = images.map((image, index) => {
        return <ImageDiv key={index}  image={image} />
    })

  
  return (
    <div id="hero" className='front-page-hero'>
       <div className='front-page-hero-introduction'>
            <div className='introduction-text'>
                <h3>HELLO FROM SAMUEL</h3>
                <h1>FRONT-<br></br>END</h1>
                <p>I am a creative Developer with passion for building eye-catching products</p>
                <a href="#work"><button className='primary-button'>  My Work</button> </a>
            </div>
            <div className='introduction-images'>
              {imageDivisions }
            </div>
       </div>
    </div>
  )
}

export default Hero