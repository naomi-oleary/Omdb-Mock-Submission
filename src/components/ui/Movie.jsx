import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Skeleton from './Skeleton';
import { useParams } from 'react-router-dom';

const Movie = ({ movie }) => {

  const [img, setImg] = useState([]);

  return (
    <>
      {img ? (
        <>
          <div className="movie__wrapper">
          <img src={movie.Poster} alt="" className="movie__img" />
          <div className="movie__description">
              <h3 className="movie__title">{movie.Title}</h3>
              <p className="year">{movie.Year}</p>
          </div>
        </div>
        </>
      ) : (
        <Skeleton />
      )}
    </>
  )
}

export default Movie;