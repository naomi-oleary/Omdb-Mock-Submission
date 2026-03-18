import React, { useState, useEffect } from 'react';
import Landing from '../components/Landing';
import Explore from '../components/Explore';
import axios from 'axios';

const Home = () => {
  
  return (
    <>
      <Landing />
      <Explore />
    </>
  )
}

export default Home;
