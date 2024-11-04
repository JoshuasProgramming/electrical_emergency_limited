import React from 'react'

import service1 from '../images/services/service1.jpg';
import service2 from '../images/services/service2.jpg';
import service3 from '../images/services/service3.jpg';
import service4 from '../images/services/service4.jpg';

import about5 from '../images/about/about5.jpg';
import about6 from '../images/about/about6.jpg';
import about7 from '../images/about/about7.jpg';
import about10 from '../images/about/about10.jpg';

function Services() {
  return (
    <div className='services'>

        {/* grid of services  */}
        <div className='service-card'>
            <img src={about5} alt='service1'></img>
            <h1>Electrical Installations</h1>
            <p>New Installations or upgrades</p>
        </div>
        
        <div className='service-card'>
            <img src={about6} alt='service2'></img>
            <h1>EICR's</h1>
            <p>Domestic & Commercial</p>
        </div>

        <div className='service-card'>
            <img src={about7} alt='service3'></img>
            <h1>Fault Finding and Fixing</h1>
            <p>Fixing electrical service upon a finding</p>
        </div>

        <div className='service-card'>
            <img src={about10} alt='service4'></img>
            <h1>Emergency Electrical Reports</h1>
            <p>Domestic & Commercial</p>
        </div>

    </div>
  )
}

export default Services