import React from 'react';
import Card from './Card'; // Make sure the path is correct
import './Part3.css'

interface Part3Props {
  title: string;
}

const Part3: React.FC<Part3Props> = ({ title }) => {
  return (
    <div className='part3'>
      <h1 className='sec'>{title}</h1>
      <div className='containerr'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Part3;
