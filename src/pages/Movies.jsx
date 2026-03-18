import React, { useState } from 'react'
import Movie, { movies } from '../components/ui/Movie';

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
      }

    }

    function filterMovies(event) {
      renderMovies(event.target.value)
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
                    // onKeyDown={(event) => {
                    //   if (event.key === "Enter") {
                    //     onSearch();
                    //   }} }
                    />
                    <button>Search</button>
                  </div>
                  <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterMovies(event.target.value)}>
                    <option value="DEFAULT" disabled>Sort</option>
                    <option value="RATING">Rating, High to Low</option>
                    <option value="HIGH_TO_LOW">Year, New to Old</option>
                    <option value="LOW_TO_HIGH">Year, Old to New</option>
                  </select>
                </div>
                <div className="movies">
                  {
                    <Movie />
                  }
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  
}

export default Movies;
