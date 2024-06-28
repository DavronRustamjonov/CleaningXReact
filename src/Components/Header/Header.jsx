import React from "react";
import "./Header.css";
import Header__pic from '../images/header-img.svg';
import Header__picture from '../images/header-pic.svg';


const Header = () => {
  return (
 <>
 <div className="header">
  <div className="container header__container">
    <div>
<ul className="header__list">
    <li className="header__item"><h1 className="header__title">Quality cleaning for your home</h1></li>
</ul>
<ul className="header__list">
    <li className="header__item"><p className="header__text">Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p></li>
</ul>
<ul className="header__next-list">
    <li className="header__item"><button className="header__btn">Get a free quote</button></li>

    <li className="header__item">
    <nav className="header__nav"><li><img className="header__pic" src={Header__picture} alt="telephone" /></li>
    <li>
    <p className="header__next-text">Call us now</p>
    <p className="header__num-text">(414) 567 - 2109</p></li>
    </nav>
    </li>
</ul>
    </div>
    <div className="header__img">
        <img className="header__images" src={Header__pic} alt="human"/>
    </div>

  </div>
 </div>
 </>
  );
}

export default Header;
