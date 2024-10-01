//react imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components for the Homepage
import Navbar from './components/Navbar';
import Hero from './components/Hero';


//pages

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
         {/* homepage route path */}
         <Route path="/" element={<HomePage/>} />

      </Routes>
    </Router>
  );
}

export default App;
