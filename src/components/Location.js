import React from 'react';

import location from '../images/location.jpg'

function Location() {
  return (
    <div className='location'>
        {/* left */}
        <div className='wrapper'>
            <img src={location} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text'>
            <h2>Service areas</h2>
            <p>We offer comprehensive services throughout the area encircled by the M25 motorway, covering key locations such as Watford, Enfield, Dartford, Croydon, Leatherhead, and more. Our team is fully equipped to support clients across the entire Greater London region and beyond, ensuring quick and efficient responses within this well-connected network.</p>
            <a href='/contact'>Contact Us</a>
        </div>
    </div>
  )
}

export default Location