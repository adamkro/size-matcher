import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Cards } from './components/Cards';
import logo from './logo.png';
import { Filters } from './components/Filters';
import { RecommendedSize } from './components/RecommendedSize';
import MySizes from './components/MySizes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MySizes />
      <Filters />
      <RecommendedSize />
      <Cards />
      <Footer></Footer>
    </div>
  );
}

export default App;
