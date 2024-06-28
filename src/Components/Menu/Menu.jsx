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
            <p className="menu__text">In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
            <div className="menu__contact">
              <img src={Telephone} alt="Telephone Icon" />
              <div className="menu__contact-info">
                <p>Call us now</p>
                <p>(414) 567 - 2109</p>
              </div>
            </div>
          </li>
          <hr/>
          <li className="menu__item">
            <h3>Not convinced yet?</h3>
            <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
            <button className="menu__button">Browse our packages</button>
          </li>
        </ul>

    
        <ul className="menu__list">
          <form className="menu__form" action="#">
            <li>
              <p>Full name</p>
              <input type="text" />
            </li>
            <li>
              <p>Phone number</p>
              <input type="tel" />
            </li>
            <li>
              <p>Address</p>
              <input type="text" />
            </li>
            <li>
              <p>Email</p>
              <input type="email" />
            </li>
            <li>
              <p>Requested service</p>
              <input type="text" />
            </li>
            <li>
              <p>Day of service</p>
              <input type="date" />
            </li>
            <li>
              <p>Add a note</p>
              <input type="text" />
            </li>
            <li>
              <button className="menu__button">Submit</button>
            </li>
          </form>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
