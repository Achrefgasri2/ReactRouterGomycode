import React from 'react'
import './MovieCard.css'
import { Rate } from 'antd';
import { Link } from 'react-router-dom'


const MovieCard = ({movie}) => {
    return (
        <div>
       
        <div className="Card">
        
          <img src={movie.posterURL} alt={movie.title} /> 
          <Link to={{
                pathname: `/movie/${movie.id}`,
                state: movie
            }} >
          <p className="title">{movie.title}  </p>
          </Link>
          
          <span><Rate disabled  value={movie.rating} /></span>
        </div>
        
      </div>
      
      
      
    )
}

export default MovieCard
