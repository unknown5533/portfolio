import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Hero from './Componets/Hero/Hero';
import About from './Componets/About/About';
import Service from './Componets/Services/Service';
import MyWork from './Componets/MyWork/MyWork';
import Contact from './Componets/Contact/Contact';
import Footer from './Componets/Footer/Footer';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </HashRouter>
  );
};

export default App;
