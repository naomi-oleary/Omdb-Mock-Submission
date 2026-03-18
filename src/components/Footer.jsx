import React from 'react';
import Logo from '../assets/Logo.jpg';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__links">
            <Link className="footer__link">Home</Link>
            <Link className="footer__link no-cursor">Contact</Link>
            <Link className="footer__link">Movies</Link>
          </div>
          <img src={ Logo } className="footer__logo logo" />
          <div className="copyright">
            Copyright &copy; 2026 Naomi O'Leary
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
