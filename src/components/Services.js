import React from 'react'

import service1 from '../images/services/service1.jpg';
import service2 from '../images/services/service2.jpg';
import service3 from '../images/services/service3.jpg';
import service4 from '../images/services/service4.jpg';

function Services() {
  return (
    <div className='services'>

        {/* grid of services  */}
        <div className='service-card'>
            <img src={service1} alt='service1'></img>
            <h1>Electrical Installations</h1>
            <p>New Installations or upgrades</p>
        </div>
        
        <div className='service-card'>
            <img src={service2} alt='service2'></img>
            <h1>EICR's</h1>
            <p>Domestic & Commercial</p>
        </div>

        <div className='service-card'>
            <img src={service3} alt='service3'></img>
            <h1>Fault Finding and Fixing</h1>
            <p>Fixing electrical service upon a finding</p>
        </div>

        <div className='service-card'>
            <img src={service4} alt='service4'></img>
            <h1>Emergency Electrical Reports</h1>
            <p>Domestic & Commercial</p>
        </div>

    </div>
  )
}

export default Services