import React from 'react';
import { Link } from 'react-router';
import Logo from '../assets/Logo.jpg'

const Nav = () => {
  return (
    <>
        <div className="nav__container">
            <div className="nav__row">
                <Link>
                    <img src={ Logo } className="logo" />
                </Link>
                <ul className="nav__list">
                    <li className="nav__links">
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li className="nav__links">
                        <Link to="/Movies" className="nav__link">Movies</Link>
                    </li>
                    <li className="nav__links">
                        <Link to="/" className="nav__link no-cursor">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Nav;
