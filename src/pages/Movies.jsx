import React, { useState, useEffect } from 'react'
import Movie, { movies } from '../components/ui/Movie';
import axios from 'axios';
import Skeleton from '../components/ui/Skeleton';
import { Link } from 'react-router-dom';

const Movies = ({ movie }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    }

    const fetchData = async () => {
      setLoading(true);
        try {
          const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=f311a7ce`)
          setMovies(response.data.Search)
        } 
        catch (err) {
          setError(err.message);
        } finally {
          const timeoutId = setTimeout(() => {
            setLoading(false);
          }, 1000);
          return () => clearTimeout(timeoutId);
        }
    }

    useEffect (() => {
      const timeoutId = setTimeout(() => {
        if (searchTerm) {
          fetchData();
        }
        else {
          setMovies(null);
        }
      }, 1000);
      return () => clearTimeout(timeoutId);
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
            const aTitle = a ? a.Title : '';
            const bTitle = b ? b.Title : '';
            return aTitle.localeCompare(bTitle);
          })
          break;
        default:
          return; 
      }
      
      setMovies(sortedMovies);
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
                  {loading ? (
                    <Skeleton />
                  ) : (
                    movies && movies.map((movie) => (
                    <Link to={`/movieinfo/${movie.imdbID}`}>
                      <Movie key={movie.imdbID} movie={movie} />
                    </Link>))
                  )}
                  {error && <p>Error: {error}</p>}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

export default Movies;
