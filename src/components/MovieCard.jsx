import React from 'react'

const MovieCard = ({movie:{id, title, vote_average, release_date, original_language, poster_path}}) => {
  return (
    <div className='movie-card' >
        <img src={poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}`: 'no-image.png'} alt={title} />
        {/* <p key={id} className='text-white'>
            {title}
        </p> */}
        <div className='mt-4'>
          <h3>{title}</h3>
          <div className='content'></div>

            

        </div>
    </div>
  )
}
 
export default MovieCard 
