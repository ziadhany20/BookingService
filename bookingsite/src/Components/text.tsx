import React from 'react'
import './text.css';
import { useTranslation } from 'react-i18next';
import '../i18n';

function words () {
  const { t, i18n } = useTranslation();
  return (
    
    <div className='main'>
        <h1 className='hh'>
        {t ('hh')}
        </h1>
        {/* <p className='para'> Best message coaches, best prices, best locations.

</p> */}

    </div>
  )
  
}

export default words 