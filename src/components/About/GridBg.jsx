import React, {useState, useEffect} from 'react'

import '../../App.scss'
import anime from 'animejs'

function GridBg(props) {

    const {selectedItem} = props

    const colors = [
        "rgb(252, 195, 115)",
        "rgb(255, 161, 170)",
       " rgb(197, 142, 234)",
       "rgb(136, 167, 238)",
       " rgb(240, 132, 220)",
       " rgb(240, 132, 220)",
    ]

    const [count, setCount] = useState(-1)

    const [columns, setColumns] = useState(Math.floor( document.documentElement.clientWidth/ 40))

    const [rows, setRows] = useState(Math.floor( document.documentElement.clientHeight / 40))


   


    useEffect(() => {
        setCount(0)
        document.documentElement.style.setProperty('--colsCount', columns)
        document.documentElement.style.setProperty('--rowsCount', rows)

        const updateSize  = (e) => {
            setColumns(Math.floor( window.innerWidth / 50))
            setRows(Math.floor( window.innerHeight / 50))
        }
        
        window.addEventListener('resize', updateSize)
        return window.removeEventListener('resize', updateSize)
    },[columns, rows])

    useEffect(() => {
        document.documentElement.style.setProperty('--colsCount', columns)
        document.documentElement.style.setProperty('--rowsCount', rows)
    },[columns,rows])

    useEffect(() => {
        document.documentElement.style.setProperty('--bgColor', colors[count -1 % (colors.length - 1 )])
    },[count,colors])


    useEffect(() => {
        setCount(count => count + 1)
        anime({
            targets: '.tile',
            backgroundColor: colors[count % (colors.length - 1)],
            delay: anime.stagger(25,{
                grid: [columns, rows],
                
            })
        },)
    },[selectedItem])

    const createTile = index => {
        return <div key={index}  onClick={()=>onTileClick(index)} className='tile'></div>
    }

    const createTiles = quantity => {
    return  Array.from(Array(quantity)).map((tile,index) => {
            return createTile(index)
        })
    }

    const onTileClick = ( index ) => {
        setCount(count => count + 1)
        anime({
            targets: '.tile',
            backgroundColor: colors[count % (colors.length - 1)],
            delay: anime.stagger(20,{
                grid: [columns, rows],
                from:index
            })
        })
    }



    const tiles = columns * rows
    const createGrid = createTiles(tiles)

  return (
    <div  className='grid-bg bg-default'>
        {createGrid}
    </div>
  )
}

export default GridBg