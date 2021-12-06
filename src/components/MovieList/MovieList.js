import React from 'react'
import MovieCard from '../MovieCard/MovieCard.js'
import './MovieList.css'

const MovieList = (props) => {

    return (
        <div className="listMovies">
             {props.movies
              .filter(movie => movie.title.toUpperCase().includes(props.title.toUpperCase())  
              && movie.rating >= props.rate
                ).map((movie, i) =>
                <div key={i}>
                    <MovieCard movie={movie} />
                </div>
            )
            }
            
        
        </div>
    )
}

export default MovieList



