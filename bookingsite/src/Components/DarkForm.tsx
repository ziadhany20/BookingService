// components/DarkForm.tsx
import React, { useState } from 'react';
import './DarkForm.css';

const DarkForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, phone });
  };

  return (
    <form className='dark-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='tel'
          id='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Enter your phone number'
        />
      </div>
      <button type='submit'>Reserve</button>
    </form>
  );
};

export default DarkForm;
