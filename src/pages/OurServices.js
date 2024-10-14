import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Accordion from '../components/accordion';
import Pointers from '../components/Pointers';


import info from '../images/info_image.jpg';

function OurServices() {

    const data = [
        { title: 'What Electrical Installations do we install', text: 'We install consumer units, solar panels, Socket & Switch,Indoor and outdoor lighting, Heating, Showers, Bathroom fans' },
        { title: 'What Are EICRs?', text: 'EICRs are vital assessments for ensuring electrical safety, while remedial work is the necessary follow-up to address any issues found. Both play a crucial role in maintaining safe electrical environments in homes and businesses' },
        { title: 'Fault Finding?', text: 'Fault finding and repair are crucial for maintaining the safety and efficiency of electrical systems. By systematically diagnosing issues and implementing effective repairs, professionals help ensure reliable and safe electrical environments.' },
        { title: 'Rewritting', text: 'Rewiring is a vital investment in the safety, efficiency, and longevity of your electrical system. By addressing outdated or faulty wiring, you can protect your property, enhance its value, and ensure it meets modern demands. Regular assessments and timely rewiring can ultimately save you from more extensive problems in the future.' },
    ]
        

    // State to track which accordion is active
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle function to open/close the accordion
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active accordion
    };

  return (
    <>
    <Navbar />

    <section className="hero-different">

        <div className='wrapper'>
            <section class="hero-text">
                <h1>Our Services</h1>
                <p>We provide comprehensive electrical services, ensuring complete customer satisfaction with every job we undertake.</p>
            </section>
        </div>
        
    </section>

    <Pointers/>

    <div className='contact'>
        {/* left */}
        <div className='wrapper'>
            <img src={info} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text'>
            <h2>Residential Electrical Services</h2>
            <p>From lighting installations to panel upgrades, we enhance the safety and efficiency of your home</p>
        </div>
    </div>

    <div className='info'>
        {/* left */}
        <div className='wrapper'>
            <img src={info} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text'>
            <h2>Commercial Electrical Solutions</h2>
            <p>We cater to businesses of all sizes, offering everything from maintenance to full-scale electrical installations</p>
        </div>
    </div>

    <div className='contact'>
        {/* left */}
        <div className='wrapper'>
            <img src={info} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text'>
            <h2>Emergency Repairs</h2>
            <p>Our team is always ready to tackle unexpected electrical problems, minimizing downtime and ensuring your peace of mind</p>
        </div>
    </div>

    <div className='info'>
        {/* left */}
        <div className='wrapper'>
            <img src={info} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text'>
            <h2>Energy Efficiency Upgrades</h2>
            <p>We help you save on energy costs with solutions like LED lighting, smart home systems, and more</p>
        </div>
    </div>


    <div className="accordion-flexbox">

            <h2>Electrical Installations</h2>

            {data.map((item, index) => (
                <div key={index} className='accordion-button-wrapper'>
                    <button
                        className="accordion"
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.title} <span>{activeIndex === index ? '-' : '+'}</span>
                    </button>
                    <div
                        className="accordion-panel"
                        style={{
                            display: activeIndex === index ? 'block' : 'none',

                        }}
                    >
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>


    

    <Footer/>
    </>
  )
}

export default OurServices