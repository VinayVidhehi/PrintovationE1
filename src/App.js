import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/contact' Component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
