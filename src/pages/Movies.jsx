import React, { useState, useEffect } from 'react'
import Movie, { movies } from '../components/ui/Movie';
import axios from 'axios';

const Movies = ({ movies: initialMovies }) => {
    const [movies, setMovies] = useState()

    async function renderMovies(filter) {
      let filteredMovies = [...movies];

      if (filter === "RATING") {
        filteredMovies.sort((a, b) =>
          a.Title.localeCompare(b.Title)
        );
      }
      if (filter === "LOW_TO_HIGH") {
        filteredMovies.sort((a, b) =>
          a.Year - b.Title
        );
      }}

        const [searchTerm, setSearchTerm] = useState('');
        const [apiData, setApiData] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);

        const handleChange = (event) => {
          setSearchTerm(event.target.value);
        }

        const fetchData = async () => {
          setIsLoading(true);
          try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=f311a7ce`)
            setApiData(response.data.Search)
          } catch (err) {
            setError(err.message);
          } finally {
            setIsLoading(false);
          }
        }

        useEffect (() => {
          if (searchTerm) {
            fetchData();
          } else {
            setApiData(null);
          }
        }, [searchTerm]);

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
                    <button>Search</button>
                  </div>
                  <select id="filter" defaultValue="DEFAULT" >
                    <option value="DEFAULT" disabled>Sort</option>
                    <option value="RATING">Rating, High to Low</option>
                    <option value="HIGH_TO_LOW">Year, New to Old</option>
                    <option value="LOW_TO_HIGH">Year, Old to New</option>
                  </select>
                </div>
                <div className="movies">
                  {isLoading && <p>Loading...</p>}
                  {error && <p>Error: {error}</p>}
                  {apiData && (
                    <Movie />
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
