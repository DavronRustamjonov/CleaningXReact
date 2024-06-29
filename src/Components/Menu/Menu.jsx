import React from "react";
import "./Menu.css";
import Telephone from '../images/header-pic.svg'; 

const Menu = () => {
  return (
    <div className="menu">
      <div className="container menu__container">
        <ul className="menu__list">
          <li className="menu__item">
            <h3 className="menu__title">Contact Us</h3>
            <p className="menu__four-text">In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
            <div className="menu__contact">
              <img className="telephone-pic" src={Telephone} alt="Telephone Icon" />
              <div className="menu__contact-info">
                <p className="menu__frist-text">Call us now</p>
                <p className="menu__next-text">(414) 567 - 2109</p>
              </div>
            </div>
          </li>
          <hr/>
          <li className="menu__item">
            <h3 className="menu__next-title">Not convinced yet?</h3>
            <p className="menu__four-text">Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
            <button className="menu__button">Browse our packages</button>
          </li>
        </ul>

    
          <form className="menu__form" action="#">
            
        <ul  className="menu__next-list">
            <li>
              <p className="menu__text">Full name</p>
              <input className="menu__input" type="text" />
            </li>
            <li>
              <p className="menu__text">Phone number</p>
              <input className="menu__input" type="tel" />
            </li>
            <li>
              <p className="menu__text">Address</p>
              <input className="menu__input" type="text" />
            </li>
            <li>
              <p className="menu__text">Email</p>
              <input className="menu__input" type="email" />
            </li>
            <li>
              <p className="menu__text">Requested service</p>
              <input className="menu__input" type="text" />
            </li>
            <li>
              <p className="menu__text">Day of service</p>
              <input className="menu__input" type="text" />
            </li>
            <li className="menu__next-item">
              <p className="menu__text">Add a note</p>
              <input className="menu__next-input" type="text" />
            </li>
            <li>
              <button className="menu__button menu__btn">Submit message</button>
            </li>
            </ul>
          </form>
        
      </div>
    </div>
  );
}

export default Menu;
