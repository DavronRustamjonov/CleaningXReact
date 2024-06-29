import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx'; 
import Header from './Components/Header/Header.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Section from './Components/Section/Section.jsx';
import Service from './Components/Service/Service.jsx';
import About from './Components/About/About.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Card from './Components/Card/Card.jsx';
import Footer from './Components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
      <div>
      <Navbar />
      <Header/>
      <Hero/>
      <Section/>
      <Service/>
      <About/>
      <Menu/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
