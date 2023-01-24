import React from 'react'
import Box from './Box'

function Result(props) {
    const boxes = props.movies.map(
        ()=>{
            return <Box/>
        }
    )
  return (
    <div className='w-full grid grid-cols-4 gap-5'>
            {boxes}
    </div>
  )
}

export default Result