import React from 'react'

import Location from '../components/Location';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Accordion from '../components/accordion';
import Contact from '../components/Contact';

function ContactUs() {
  return (
    <>
        <Navbar/>

        <section className="hero-different">

            <div className='wrapper'>
                <section class="hero-text">
                    <h1>Contact Us</h1>
                    <p>Your Reliable 24/7 Emergency Electricians</p>
                </section>
            </div>
        
        </section>

        <Contact/>
        <Footer/>
    </>
    
  )
}

export default ContactUs