import React from 'react';

import { Link } from 'react-router-dom';


function Hero() {
  return (
    <section class="hero">

        <div className='wrapper'>
            <section class="hero-text">
                <h1>Welcome to 24/7 ASAP Emergency Electrical Limited</h1>
                <p>We guarantee that all our electrical installations are not only safe and efficient but also fully compliant with the latest standards</p>
                <a href='/services'>Our Services</a>
            </section>
        </div>
        
    </section>
  )
}

export default Hero