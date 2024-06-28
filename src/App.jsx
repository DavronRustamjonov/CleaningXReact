import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx'; 
import Header from './Components/Header/Header.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Section from './Components/Section/Section.jsx';
import Service from './Components/Service/Service.jsx';
import About from './Components/About/About.jsx';
import Menu from './Components/Menu/Menu.jsx';
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
    </div>
  );
}

export default App;
