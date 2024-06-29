import React from "react";
import "./Footer.css";
import Logo from '../images/nav__logo.svg';
import FooterHr from '../images/footer__hr.svg';
const Footer = () => {
  return (
    <div className="footer">
        
        <div className="container ">
            <img className="footer__hr" src={FooterHr} alt="" />
            <div className="footer__container">
             
            <ul className="footer__list"><img src={Logo} alt="footer logo " /></ul>
            <ul className="footer__list">
                <li><p className="footer__text">Copyright © Cleaning X | Designed by</p></li>
                <li><a className="footer__link" href="#">BRIX Templates</a></li>
                <li><p className="footer__text">- Powered by</p></li>
                <li><a href="#" className="footer__link">Webflow </a></li>
                <li><a href="#"className="footer__link"> Licenses</a></li>
            </ul>
        </div>
        </div>

    </div>
    );
}

export default Footer;
