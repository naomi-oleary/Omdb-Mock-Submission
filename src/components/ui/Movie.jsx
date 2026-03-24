import React, { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

const Movie = ({ movie }) => {

  const [img, setImg] = useState([]);

  return (
        <>
          <div className="movie__wrapper">
            <img src={movie.Poster} alt="" className="movie__img" />
            <div className="movie__description">
                <h3 className="movie__title">{movie.Title}</h3>
                <p className="year">{movie.Year}</p>
            </div>
          </div>
        </>
  )
}

export default Movie;