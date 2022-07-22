import React from 'react'

import '../../App.scss'

function ImageDiv(props) {

    const {image} = props
    console.log(image)
  return (
    <div className={`hero-image ${image.border ? "hero-image-border": ""} ${image.bg ? "hero-image-bg" : ""}` }>
        <img src={image.image} alt="2" />
        <p>{image.text}</p>
    </div>
  )
}

export default ImageDiv