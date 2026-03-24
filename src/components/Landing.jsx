import React from 'react';
import MovieImg from '../assets/landing-img.svg';

const Landing = () => {

  return (
    <>
      <div className="landing__container container">
        <div className="landing__row">
          <h1 className="gold">RIMBERIO</h1>
          <h2>Discover Your Favorite Films</h2>
          <div className="landing__img--container">
            <img src={ MovieImg } alt="landing img" className="landing--img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing;