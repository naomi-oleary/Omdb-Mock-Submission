import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMovies(/*searchTerm*/) {
    setLoading(true);
    const { data} = await axios.get(`https://www.omdbapi.com/?s=anchor&apikey=f311a7ce`);
    console.log(data);
    if (data.Response === "True") {
      setMovies(data.Search)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  
  return (
    <>
      { loading ?
        new Array(10).fill(0).map((_, index) => (
          '***'
        )
      ) : (
      movies.map((movie) => (
        <div key={movie.id} className="movie__wrapper">
          <img src={movie.Poster} alt="" className="movie__img" />
          <p className="see-more">See More</p>
          <div className="movie__description">
              <h3 className="movie__title">{movie.title}</h3>
              <p className="year">{movie.year}</p>
          </div>
        </div>
      ))
      .slice(0, 6)
      )}
    </>
  )
}

export default Movie;