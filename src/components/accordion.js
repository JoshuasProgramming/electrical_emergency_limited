// import React, { Component, useState} from 'react';

// class Accordion extends Component{
//     render() {
//         const data = [
//             {title: 'Safety First', text: 'Your safety is our top priority. We adhere to strict guidelines to ensure every job is performed with the utmost care and professionalism. No shortcuts—just safe and reliable solutions.'},
//             {title: 'Customer-Centric', text: 'Our dedication to exceptional service starts with clear, transparent, and effective communication. We focus on understanding your unique needs, offering transparent explanations of our processes, and keeping you informed at every step.'},
//             {title: 'Honesty and Transparency', text: 'We believe in clear communication and integrity. With us, there are no hidden fees or unexpected charges. Our upfront pricing and transparent quotes ensure you always know what to expect. We aim to build trust with every client by delivering high-quality work and straightforward service'},
//             {title: 'Our Coverage Area', text:'At 24/7 ASAP Emergency Electrical, we proudly serve customers in Watford, Enfield, Dartford, Croydon, Leatherhead, and the surrounding areas. Our coverage extends throughout the entire Greater London region and beyond, including areas around the M25. No matter where you are, our team is ready to provide reliable emergency support for both homes and businesses.'},
//             {title: 'Get in Touch Anytime', text: 'Electrical issues can be stressful—but getting help shouldn’t be. Contact us at [phone number, WhatsApp, or email] whenever you need emergency electrical services. With  24/7 ASAP Emergency Electrical, help is always just a call away.'}
//         ];

//         const active = () => {
//             if(document.getElementById('text_active').style.display = 'none'){
//                 document.getElementById('text_active').style.display = 'inline';
//             } else {
//                 document.getElementById('text_active').style.display = 'none';
//             }
//         }

//         return (
//             <>
//                 <div className='accordion-flexbox'>
//                     {
//                         data.map((value, key) => (
//                             <>
//                                 <button className='accordion' key={key} onClick={active} > {value.title} <p>+</p> </button>
//                                 <div className='accordion-panel' key={key} id="text_active">
//                                     <p>{value.text}</p>
//                                 </div>
//                             </>
//                         ))
//                     }
//                 </div>
//             </>
//         )
//     }
// }



// export default Accordion;





















import React, { useState } from 'react';

const Accordion = () => {
    const data = [
        { title: 'Safety First', text: 'Your safety is our top priority. We adhere to strict guidelines to ensure every job is performed with the utmost care and professionalism. No shortcuts—just safe and reliable solutions.' },
        { title: 'Customer-Centric', text: 'Our dedication to exceptional service starts with clear, transparent, and effective communication. We focus on understanding your unique needs, offering transparent explanations of our processes, and keeping you informed at every step.' },
        { title: 'Honesty and Transparency', text: 'We believe in clear communication and integrity. With us, there are no hidden fees or unexpected charges. Our upfront pricing and transparent quotes ensure you always know what to expect. We aim to build trust with every client by delivering high-quality work and straightforward service' },
        { title: 'Our Coverage Area', text: 'At 24/7 ASAP Emergency Electrical, we proudly serve customers in Watford, Enfield, Dartford, Croydon, Leatherhead, and the surrounding areas. Our coverage extends throughout the entire Greater London region and beyond, including areas around the M25. No matter where you are, our team is ready to provide reliable emergency support for both homes and businesses.' },
        { title: 'Get in Touch Anytime', text: 'Electrical issues can be stressful—but getting help shouldn’t be. Contact us at [phone number, WhatsApp, or email] whenever you need emergency electrical services. With  24/7 ASAP Emergency Electrical, help is always just a call away.' }
    ];

    // State to track which accordion is active
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle function to open/close the accordion
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active accordion
    };

    return (
        <div className="accordion-flexbox">

            <h2>Our Values</h2>

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
    );
};

export default Accordion;
