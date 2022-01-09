import React from 'react';
import DisplayContent from './components/DisplayContent';
import DisplayContent1 from './components/DisplayContent1';
import DisplayContent2 from './components/DisplayContent2';
import DisplayContent3 from './components/DisplayContent3';
import Footer from './components/Footer';
import GamePass from './components/GamePass';
import Header from './components/Header';
import Hero from './components/Hero';
import MSResponse from './components/MSResponse';
import Social from './components/Social';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <DisplayContent />
      <DisplayContent1 />
      <GamePass />
      <DisplayContent2 />
      <MSResponse />
      <DisplayContent3 />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
