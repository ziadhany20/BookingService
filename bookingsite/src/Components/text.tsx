import React from 'react'
import './text.css';
import Image from 'next/image';
import logo from '../../public/assets/logo.png';

function words () {
     
  return (
    
    <div className='main' style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Image src={logo} alt="WhatsApp Icon" className='LogoBig' />
        {/* <p className='para'> Best message coaches, best prices, best locations.

</p> */}

    </div>
  )
  
}

export default words 