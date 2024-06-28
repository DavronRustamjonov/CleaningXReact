import React from "react";
import "./Section.css";
import Section__pic from '../images/section-img1.svg';
import Section__picture from '../images/section-img2.svg';
import Section__img from '../images/section-img3.svg';


const Section = () => {
  return (
 <>
 <div className="section">
    <div className="container section__container">
      <ul className="section__list">  
        <li className="section__next-item"><h2 className="section__title">Our Services</h2></li>
        <li className="section__next-item"><button className="section__btn">Explore services</button></li>
      </ul>
        <ul className="section__list ">
            <li className="section__item">
                <img className="section__pic" src={Section__pic} alt="our services  images" />
                
                <p className="section__lead">House cleaning</p>
                <p className="section__next-text">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </li>
            <li className="section__item">
                <img className="section__picture" src={Section__picture} alt="our services  images" />
                <p className="section__lead">Office cleaning</p>
                <p className="section__next-text">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </li>
            <li className="section__item">
                <img className="section__img" src={Section__img} alt="our services  images" />
                <p className="section__lead">Industrial cleaning</p>
                <p className="section__next-text">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </li>
        </ul>
    </div>
 </div>
 </>
  );
}

export default Section;
