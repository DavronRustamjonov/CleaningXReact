import React from "react";
import "./Service.css";
import Service__pic from '../images/header-pic.svg';
import Service__picture from '../images/service-pic.svg';



const service = () => {
  return (
 <>
 <div className="service">
  <div className="container service__container">
  <div className="service__img">
        <img className="service__images" src={Service__picture} alt="human"/>
    </div>
    <div>
        <ul>
            <p className="service__lead">Covid-19 sanitization</p>
        </ul>
<ul className="service__list">
    <li className="service__item"><h1 className="service__title">We follow guidelines to keep you safe from the COVID-19 virus</h1></li>
</ul>
<ul className="service__list">
    <li className="service__item"><p className="service__text">Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p></li>
</ul>
<ul className="service__next-list">
    <li className="service__item"><button className="service__btn">Get a free quote</button></li>

    <li className="service__item">
    <nav className="service__nav"><li><img className="service__pic" src={Service__pic} alt="telephone" /></li>
    <li>
    <p className="service__next-text">Call us now</p>
    <p className="service__num-text">(414) 567 - 2109</p></li>
    </nav>
    </li>
</ul>
    </div>
   

  </div>
 </div>
 </>
  );
}

export default service;
