import React from 'react';
import Logo from '../assets/Logo.jpg';
import SlideCarousel from './ui/Carousel';
import Movie from './ui/Movie';

export default function Explore() {
  return (
    <>
        <div className="explore__container">
            <div className="explore__row">
                <h2 className="explore__title">
                    Explore <span className="gold">top-rated movies</span> to ace your movie night
                </h2>
                <div className="movies__samples">
                  <Movie />
                </div>
            </div>
        </div>
    </>
  )
}
