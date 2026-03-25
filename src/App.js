import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';


function App () {

  return (
    <Router>
        <div className="App">
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies"  element={<Movies />} />
            <Route path="/movieinfo/:movieID" element={<MovieInfo />} />
          </Routes>

          <Footer />
        </div>
    </Router>
  );
}

export default App;

//CREDITS 
// BG img: <a href="https://www.vecteezy.com/free-photos/background">Background Stock photos by Vecteezy</a>
// Logo img: Canva