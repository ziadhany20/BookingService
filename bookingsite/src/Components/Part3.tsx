import React from 'react';
import AllPackagesSection from './AllPackagesSection'; // Make sure the path is correct
import './Part3.css'

interface Part3Props {
  title: string;
}

const Part3: React.FC<Part3Props> = ({ title }) => {
  return (
    <div className='part3'>
      <h1 className='sec'>{title}</h1>
      <div className='containerr'>
        <AllPackagesSection />
      </div>
    </div>
  );
}

export default Part3;
