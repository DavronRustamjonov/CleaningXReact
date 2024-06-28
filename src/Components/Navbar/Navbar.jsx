import React from "react";
import "./Navbar.css";
import Nav_logo from '../images/nav__logo.svg';
import Burger from '../images/nav_burger.png';

const Nav = () => {
  return (
    <div className="nav">
      <div className="container nav__container">
        <a className="nav__logo" href="#"><img src={Nav_logo} alt="logo"/></a>
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#">Home</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">About</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">Services</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">Articles</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">Contact</a>
          </li>
        </ul>
        <a className="nav__sublink" href="#">Get a free quote</a>
        <button type="button" id="nav__btn"><img src={Burger} alt="btn"/></button>
      </div>
    </div>
  );
}

export default Nav;
