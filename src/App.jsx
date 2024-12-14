import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Benefits from './components/Benefits/Benefits';
import Investment from './components/Investment/Investment';
import Properties from './components/Properties/Properties';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <Benefits />
      <Investment />
      <Properties />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;