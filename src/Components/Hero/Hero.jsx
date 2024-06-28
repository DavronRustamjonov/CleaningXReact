import React from "react";
import "./Hero.css";
import Hero__pic from '../images/hero-img1.svg';
import Hero__picture from '../images/hero-img2.svg';
import Hero__img from '../images/hero-img3.svg';


const Hero = () => {
  return (
 <>
 <div className="hero">
    <div className="container hero__container">
        <h2 className="hero__title">About Us</h2>
        <p className="hero__text">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        <ul className="hero__list ">
            <li className="hero__item">
                <img className="hero__pic" src={Hero__pic} alt="about us  images" />
                
                <p className="hero__lead">1. Schedule online</p>
                <p className="hero__next-text">Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </li>
            <li className="hero__item">
                <img className="hero__picture" src={Hero__picture} alt="about us  images" />
                <p className="hero__lead">2. Pay online easily</p>
                <p className="hero__next-text">Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
            </li>
            <li className="hero__item">
                <img className="hero__img" src={Hero__img} alt="about us  images" />
                <p className="hero__lead">3. Get your house cleaned</p>
                <p className="hero__next-text">Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
            </li>
        </ul>
        <ul className="hero__next-list">
        <li><button className="hero__btn">Get a free quote</button></li>
        <li><button className="hero__next-btn">Explore services</button></li>
        </ul>
    </div>
 </div>
 </>
  );
}

export default Hero;
