import React from 'react';
import './Part5.css'
import TopDealsSection from './TopDealsSection';

interface Part4Props {
  title: string;
}

const Part3: React.FC<Part4Props> = ({ title }) => {
  return (
    <div className='part3'>
      <h1 className='sec'>{title}</h1>
      <div className='containerr'>
        <TopDealsSection />
      </div>
    </div>
  );
}

export default Part3;
