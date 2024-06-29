import React from "react";
import "./Card.css";
import Square from '../images/card-square.svg';


const Card = () => {
  return (
    <div className="card">
        <div className="container card__container">
           
   <ul className="card__list">

   <li className="card__item">
    <p className="card__lead">Quality cleaning for your home</p>
    <p className="card__text">Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
    <div className="wrapper"><img src={Square} alt="card square picture" /><img src={Square} alt="card square picture" /><img src={Square} alt="card square picture" /><img src={Square} alt="card square picture" /><img src={Square} alt="card square picture" /></div>
   </li>
   <li className="card__item">
    <p className="card__next-lead">Contact us</p>
    <p className="card__text">1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
    <p className="card__text">(414) 567 - 2109</p>
    <p className="card__text">contact@cleaning.com</p>
   </li>
   
   
   <li className="card__item">
    <p className="card__next-lead">Hours</p>
    <p className="card__next-lead">Monday to Friday</p>
    <p className="card__text">6:00 AM - 9:00 PM</p>
     
    <p className="card__next-lead">Saturday & Sunday</p>
    <p className="card__text">8:00 AM - 8:00 PM</p>
   </li>
   <li className="card__item">
    <p className="card__next-lead">Get a free estimate</p>
    <p className="card__three-lead">(414) 567 - 2109</p>
    <p className="card__text">Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
    <button className="card__btn">Request a free quote</button>
   </li>
   
   </ul>
        </div>

    </div>
  );
}

export default Card;
