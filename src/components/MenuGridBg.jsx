import React, {useState, useEffect} from 'react'

import '../App.scss'
import anime from 'animejs'

function MenuGridBg(props) {

    const {navIsOpen} = props

    const colors = [
        "rgb(252, 195, 115)",
        "rgb(255, 161, 170)",
       " rgb(197, 142, 234)",
       "rgb(136, 167, 238)",
       " rgb(240, 132, 220)",
       " rgb(240, 132, 220)",
    ]

    const [count, setCount] = useState(-1)

    const [columns, setColumns] = useState(Math.floor( document.documentElement.clientWidth/ 150))

    const [rows, setRows] = useState(Math.floor( document.documentElement.clientHeight / 150))



    useEffect(() => {
        setCount(0)
        document.documentElement.style.setProperty('--colsCountMenu', columns)
        document.documentElement.style.setProperty('--rowsCountMenu', rows)

        const updateSize  = (e) => {
            setColumns(Math.floor( window.innerWidth / 150))
            setRows(Math.floor( window.innerHeight / 150))
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
            delay: anime.stagger(100,{
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