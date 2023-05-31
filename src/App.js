import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/HeaderSelection';
import Navbar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import About from './components/AboutUs';
import SIRE from './components/S.I.R.E';
import Features from './components/S.I.R.E-Features';
import Whysire from './components/WhySire';
import Choose from './components/Choose';
import Connect from './components/ConnectSun';
import Frequently from './components/Frequently';
import Contactform from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSection />
        <Navbar />
        <HeroSection />
        <About />
        <SIRE />
        <Features />
        <Whysire />
        <Choose />
        <Connect />
        <Frequently />
        <Contactform />
        <Footer />
      </div>
    );
  }
}

export default App;
