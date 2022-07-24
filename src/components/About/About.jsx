import React, {useEffect, useState} from 'react'
import imagesWhite from '../../images-white'
import images from '../../images'
import GridBg from './GridBg'
import ListItem from './ListItem'
import gsap from 'gsap'

function About() {

    const listItems = [
        {   
            id: 1,
            item:"Development",
            isSelected:false,
            image:imagesWhite[1].image,
            text:"I started studying UX/UI Design in 2021 and it didn't take long for me to start losing my self in the weird quirky-ness of front-end development."
        },
        {   
            id: 2,
            item:"Music",
            isSelected:false,
            image:imagesWhite[2].image,
            text: "I am a very big fan of music, it is the single most thing I can not imagine living without. for the Genres im into Rock, Disco and a heavy whiff of EDM."
        },
        {
            id: 3,
            item:"Games", 
            isSelected:false,
            image:imagesWhite[0].image,
            text: "Rogue-like, rogue-lite, MMO-RPG's, alot of my motivation to figure out coding challenges comes from perseverence acquired ftom these types of games :)  "
        },
        {
            id: 4,
            item:"Fantasy",
            isSelected:false,
            image:imagesWhite[3].image,
            text:"Either reading Paolini, or simply watching Lord of the rings, I'm in as long as it has dwarves. "
        }
    ]
    
    const [selectedItem, setSelectedItem] = useState({
        id: 1,
        item:"Development",
        isSelected:false,
        image:images[1].image,
        text:"I started studying UX/UI Design in 2021 and it didn't take long for me to start losing my self in the weird quirky-ness of front-end development"
        })

    const selectActiveItem = id => {
        listItems.map(item => {
            return item.id === id ? setSelectedItem({...item}) : ""
        })
    }

    useEffect(() =>{

        gsap.fromTo(".display-item",
        {
            opacity: 0,
            translateX:"-200px"
        
        },
        {
            opacity: 1,
            translateX:"0px",
            delay: 0.2,
            duration: 0.5
    })
        
    },[selectedItem])

    
    const createListItems = listItems.map(item => {
        return <ListItem  activeItem={selectedItem} key={item.id} selectActiveItem={()=>selectActiveItem(item.id)} item={item} />
    })


  return (
    <div className='front-page-about'>
        <GridBg selectedItem={selectedItem} />
        <div className="display-about-wrapper">
        <div className='about-get-to-know-me'>
                <h1 >Get to know me</h1>
                <p>Essentially I am about 4 things</p>
            <ul onClick={selectActiveItem}>
            {createListItems}
            </ul>
        </div>
        <div className='display-selection'>
            <div className={` display-item`}>
            <img src={selectedItem.image} alt="" />
            <h2 className=''>{selectedItem.item}</h2>
            <p className=''>{selectedItem.text}</p>
            </div>
        </div>
        </div>
        </div>
  )
}

export default About