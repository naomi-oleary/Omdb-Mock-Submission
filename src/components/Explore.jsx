import React from 'react';
import { Link } from 'react-router-dom';

export default function Explore() {
  return (
    <>
        <div className="explore__container">
            <div className="explore__row">
                <h2 className="explore__title">
                    Explore <span className="gold">top-rated movies</span> to ace your movie night
                </h2>
                <Link to="/Movies">
                  <button className="browse-movies__btn">Browse Movies</button>
                </Link>
            </div>
        </div>
    </>
  )
}
