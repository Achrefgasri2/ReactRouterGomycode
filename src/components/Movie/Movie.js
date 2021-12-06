import React from 'react'
import { Button } from 'react-bootstrap'
import './Movie.css'

const Movie = ({ history, location }) => {
    const movie = location.state
    return (
        <div>
           <h2>{movie.title} {movie.description}</h2>
           <iframe width={853} height={480} src={movie.trailer} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
           <Button variant="secondary"
                onClick={() => history.goBack()}
            >Go Back</Button>


        </div>
    )
}

export default Movie
