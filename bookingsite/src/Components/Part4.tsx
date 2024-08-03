import React from 'react';
import Card from './Card'; // Make sure the path is correct
import './Part4.css'
import Card2 from './Card2';

interface Part4Props {
  title: string;
}

const Part3: React.FC<Part4Props> = ({ title }) => {
  return (
    <div className='part3'>
      <h1 className='sec'>{title}</h1>
      <div className='containerr'>
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </div>
  );
}

export default Part3;
