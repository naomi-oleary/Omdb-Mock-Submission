import React from 'react'
import Movie from '../components/ui/Movie';

const MovieInfo = ({ movies }) => {
// `https://www.omdbapi.com/?i=${movie.Title}&apikey=f311a7ce`

  return (
    <>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
      {/* <div className="movieInfo__container">
        <div className="movieInfo__row">
          <div className="movieInfo__movie">
            <div className="movieInfo__img">
              <img src={movie.Poster} alt="" />
            </div>
            <div className="movieInfo__text">
              <h2 className="movieInfo__title">
                {movie.title}
              </h2>
              <p className="movieInfo__description">
                {movie.plot}
              </p>
              <h3 className="movieInfo__rating">
                {movie.rating}
              </h3>
              <h3>
                {movie.runtime}
              </h3>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default MovieInfo;