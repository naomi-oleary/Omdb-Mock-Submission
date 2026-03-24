import React, { useState, useEffect } from 'react'
import Movie, { movies } from '../components/ui/Movie';
import axios from 'axios';
import Skeleton from '../components/ui/Skeleton';
import { Link } from 'react-router-dom';

const Movies = ({ movie }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    }

    const fetchData = async () => {
      setIsLoading(true);
        try {
          const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=f311a7ce`)
          setMovies(response.data.Search)
        } 
        catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
    }

    useEffect (() => {
      setTimeout(() => {
        if (searchTerm) {
          fetchData();
        }
        else {
          setMovies(null);
        }
      }, 300)
    }, [searchTerm]);

    function sortMovies(sortType) {
      if (!movies || !Array.isArray(movies)) {
        console.warn("Invalid array provided for sorting.");
        return [];
      }

      let sortedMovies = [...movies];

      switch(sortType) {
        case 'HIGH_TO_LOW':
          sortedMovies.sort((a, b) => b.Year - a.Year);
          break;
        case 'LOW_TO_HIGH':
          sortedMovies.sort((a, b) => a.Year - b.Year);
          break;
        case 'TITLE_A_Z':
          sortedMovies.sort((a, b) => {
            const aTitle = a ? a.title : '';
            const bTitle = b ? b.title : '';
            return a.Title.localeCompare(bTitle);
          })
          break;
        default:
          return; 
      }
      
      setMovies(sortedMovies)
    }

    return (
      <div id="movies__body">
        <main id="movies__main">
          <section>
            <div className="movies__container">
              <div className="movies__row">
                <div className="movies__header">
                  <h2 className="movies__header--title">
                    All Movies
                  </h2>
                  <div className="input__field">
                    <input 
                        type="text" 
                        className="search-bar" 
                        placeholder="Search by title"
                        value={searchTerm}
                        onChange={handleChange}
                      ></input>
                    <button className="search__btn">Search</button>
                  </div>
                  <select id="filter" defaultValue="DEFAULT" 
                    onChange={(event) => sortMovies(event.target.value)} 
                  >
                    <option value="DEFAULT" disabled>Sort</option>
                    <option value="TITLE_A_Z">Alphabetical by Title</option>
                    <option value="HIGH_TO_LOW">Year, New to Old</option>
                    <option value="LOW_TO_HIGH">Year, Old to New</option>
                  </select>
                </div>
                <div className="movies">
                  {isLoading && <Skeleton />}
                  {error && <p>Error: {error}</p>}
                  {movies && movies.map((movie) => (
                    <Link to="/movieinfo">
                      <Movie key={movie.imdbID} movie={movie} />
                    </Link>
                  )
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

export default Movies;
