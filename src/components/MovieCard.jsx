import React from 'react'

import Rating from '@mui/material/Rating';

const MovieCard = ({movie}) => {

  return (
    <div className='carte' >
            <h5>{movie.title}</h5>
      <p>{movie.description}</p>

  
      <img style={{ width: '100px' }} src={movie.posterUrl} alt="" />

 
<Rating name="read-only" value={movie.rate} readOnly />
   
   

    </div>
  )
}

export default MovieCard
