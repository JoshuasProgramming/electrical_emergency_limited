//react imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components for the Homepage
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


//pages

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Info/>
      <Services/>
      <Contact/>
      <Footer/>
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
