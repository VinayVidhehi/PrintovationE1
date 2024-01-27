import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Events from './Components/Events';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/events' Component={Events} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
