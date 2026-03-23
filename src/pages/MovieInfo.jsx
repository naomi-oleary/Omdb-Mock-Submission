import React, { useState, useEffect} from 'react'
import Movie from '../components/ui/Movie';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const MovieInfo = () => {
  const { imdbID } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

    const fetchMovieInfo = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://www.omdbapi.com/?i=tt0372784&apikey=f311a7ce`)
        setMovieInfo(response.data)
        console.log(response.data.Search)
      } catch (err) {
          setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    useEffect (() => {
      if (movieInfo) {
        console.log()
        fetchMovieInfo();
      } else {
        setMovieInfo(null);
      }
    }, [movieInfo])

  return (
    <>
      <div className="movieInfo__container">
        <div className="movieInfo__row">
          <div className="movieInfo__movie">
            <div className="movieInfo__img">
              <img src={movieInfo.Poster} alt="" />
            </div>
            <div className="movieInfo__text">
              <h2 className="movieInfo__title">
                {movieInfo.Title}
              </h2>
              <p className="movieInfo__description">
                {movieInfo.plot}
              </p>
              <h3 className="movieInfo__rating">
                {movieInfo.rating}
              </h3>
              <h3>
                {movieInfo.runtime}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieInfo;