import React, {useState, useEffect} from 'react'

import '../App.scss'
import anime from 'animejs'

function MenuGridBg(props) {

    const {navIsOpen, isMobile} = props

 
    const [count, setCount] = useState(-1)

    const [columns, setColumns] = useState(Math.floor( document.documentElement.clientWidth/ 50))

    const [rows, setRows] = useState(Math.floor( document.documentElement.clientHeight / 50))



    useEffect(() => {
        setCount(0)
        document.documentElement.style.setProperty('--colsCountMenu', columns)
        document.documentElement.style.setProperty('--rowsCountMenu', rows)

        const updateSize  = (e) => {
            setColumns(Math.floor( window.innerWidth / 50))
            setRows(Math.floor( window.innerHeight / 50))
        }
        
        window.addEventListener('resize', updateSize)
        return window.removeEventListener('resize', updateSize)
    },[])

    useEffect(() => {
        document.documentElement.style.setProperty('--colsCountMenu', columns)
        document.documentElement.style.setProperty('--rowsCountMenu', rows)
    },[columns,rows])



    const createTile = index => {
        return <div key={index}  className='tile-menu'></div>
    }

    const createTiles = quantity => {
    return  Array.from(Array(quantity)).map((tile,index) => {
            return createTile(index)
        })
    }


    useEffect( () => {
       
        anime({
            targets: '.tile-menu',
            opacity: navIsOpen? 1 : 0,
            delay: anime.stagger(isMobile ? 30 : 10,{
                grid: [columns, rows],
                from:columns - 1
            })
        })
    },[navIsOpen])



    const tiles = columns * rows
    const createGrid = createTiles(tiles)

  return (
    <div  className='grid-bg-menu'>
        {createGrid}
    </div>
  )
}

export default MenuGridBg