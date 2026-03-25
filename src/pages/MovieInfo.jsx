import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const MovieInfo = () => {
  const [info, setInfo] = useState('');
  const [error, setError] = useState(null);
  const { movieID } = useParams()

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
      const response = await axios.get(`https://www.omdbapi.com/?i=${movieID}&apikey=f311a7ce`)
      console.log(response.data)
      if (response.data.Response === "True") {
      
      
      
        setInfo(response.data);
      } else {
        setError(response.data.Error);
      }
      } catch (err) {
          setError(err.message);
      }
    };

    fetchMovieInfo();
  }, [movieID]);

  return (
    <>
      <div className="movieInfo__container">
        <Link to="/movies">
          <h3 className="back__btn">←</h3>
        </Link>
        <div className="movieInfo__row">
          <div className="movieInfo__movie">
            <div className="movieInfo__img">
              <img className="info--img" src={info.Poster} alt="" />
            </div>
            <div className="movieInfo__text">
              <h2 className="movieInfo__title">
                {info.Title}
              </h2>
              <div className="movieInfo__description">
                <p>Genre: {info.Genre}</p>
                <br />
                <p>Plot: {info.Plot}</p>
              </div>
              <h3 className="movieInfo__rating">
                {info.Rated}
              </h3>
              <h3>
                {info.Runtime}
              </h3>
              <h3>
                IMDb Rating: {info.imdbRating}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieInfo;