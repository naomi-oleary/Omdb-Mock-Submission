import React, { useState, useEffect } from 'react';
import Landing from '../components/Landing';
import Explore from '../components/Explore';
import axios from 'axios';

const Home = () => {

  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=f311a7ce`)
    setMovies(data.Search);
  };

  useEffect(() => {
    fetchMovies()
  }, []);

  return (
    <>
      <Landing />
      <Explore />
    </>
  )
}

export default Home;
