import React from 'react';
import AllPackagesSection from './AllPackagesSection'; // Make sure the path is correct
import './Part4.css'
import OffersSection from './OffersSection';

interface Part4Props {
  title: string;
}

const Part3: React.FC<Part4Props> = ({ title }) => {
  return (
    <div className='part3' id='offers'>
      <h1 className='sec'>{title}</h1>
      <div className='containerr'>
        <OffersSection />
      </div>
    </div>
  );
}

export default Part3;
