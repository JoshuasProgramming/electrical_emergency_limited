//react imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components for the Homepage
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Services from './components/Services';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';


//pages
import About from './pages/About';
import OurServices from './pages/OurServices';
import ContactUs from './pages/ContactUs';

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Info/>
      <Services/>
      <Location/>
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
         <Route path="/about" element={<About/>} />
         <Route path="/services" element={<OurServices/>} />
         <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
