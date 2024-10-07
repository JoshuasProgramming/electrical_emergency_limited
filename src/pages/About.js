import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Accordion from '../components/accordion';
import info from '../images/info_image.jpg';

function About() {
  return (

    <>
    <Navbar />

    <section class="hero">

        <div className='wrapper'>
            <section class="hero-text">
                <h1>About us</h1>
                <p>Your Reliable 24/7 Emergency Electricians</p>
            </section>
        </div>
        
    </section>


    <div className='contact'>
        {/* left */}
        <div className='wrapper'>
            <img src={info} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text'>
            <h2>About Us</h2>
            <p>When electrical emergencies strike, you need a reliable team you can trust and count on—anytime, day or night. At 24/7 ASAP Emergency Electrical, we provide swift, professional, and dependable services around the clock, whether you’re facing a sudden power outage, exposed wiring, or malfunctioning systems. Our mission is to resolve your electrical issues safely and efficiently, ensuring your peace of mind when it matters most.</p>
        </div>
    </div>

    <div className='info'>
        {/* left */}
        <div className='wrapper'>
            <img src={info} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text'>
            <h2>Why Choose Us?</h2>
            <p>Around-the-Clock Availability <br></br> Electrical emergencies don’t follow a schedule, and neither do we. Our dedicated team of certified electricians are available 24/7, ready to swiftly address any issue—be it a power outage, faulty wiring, or urgent repairs. We are committed to providing immediate and reliable assistance whenever you need it.</p>
        </div>
    </div>

    <div className='contact'>
        {/* left */}
        <div className='wrapper'>
            <img src={info} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text'>
            <h2>Fast Response Time</h2>
            <p>We understand that time is crucial when dealing with electrical issues. That's why our experienced electricians are always ready to respond quickly and efficiently. Whether you require emergency repairs or routine maintenance, you can rely on us to be there when you need us. Our team is dedicated to providing prompt and reliable service to effectively resolve your electrical problems.            </p>
        </div>
    </div>

    <div className='info'>
        {/* left */}
        <div className='wrapper'>
            <img src={info} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text'>
            <h2>Qualified and Trusted Professionals</h2>
            <p>We understand that time is crucial when dealing with electrical issues. That's why our experienced electricians are always ready to respond quickly and efficiently. Whether you require emergency repairs or routine maintenance, you can rely on us to be there when you need us. Our team is dedicated to providing prompt and reliable service to effectively resolve your electrical problems.            </p>
        </div>
    </div>

    <Accordion/>

    <Footer/>
    </>

  )
}

export default About