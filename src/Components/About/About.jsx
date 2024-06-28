import React from "react";
import Body__pic from '../images/app-img1.svg';
import Body__picture from '../images/app-img2.svg';
import Square from '../images/about-position.svg';
import "./About.css";
const About = () => {
  return (
 <>
  <div className="about">
    <div className="container about__container">
     <div className="about__header">
<ul className="about__list"><h3 className="about__title">Articles & resources</h3></ul>
<ul className="about__next-list">
    <li className="about__item"><button className="about__btn">Get a free quote</button></li>
    <li className="about__item"><button className="about__btn">Browse articles</button></li>
</ul>
     </div>
     <div className="about__body">
        <ul className="body__list">
           <li className="body__item"><img className="body__pic" src={Body__pic} alt="body pic" /></li>
           <li className="body__next-item">
            <p className="body__lead">8 best vacuum cleaners to clean any mess for your home in 2022</p>
            <p className="body__text">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
            <div className="wrapper">
            <p className="body__next-text">Jan 28, 2022</p>
            <img className="square" src={Square} alt="square" />
            </div>
           </li>
        </ul>
        <ul className="body__list">
           <li className="body__item"><img className="body__pic" src={Body__picture} alt="body pic" /></li>
           <li className="body__next-item">
           <p className="body__lead">How to properly disinfect your phone and other electronics</p>
           <p className="body__text">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
           <div className="wrapper">
           <p className="body__next-text">Feb 1, 2022</p>
           <img className="square" src={Square} alt="square" />
           </div></li>
        </ul>
     </div>
    </div>
  </div>
 </>
  );
}

export default About;
