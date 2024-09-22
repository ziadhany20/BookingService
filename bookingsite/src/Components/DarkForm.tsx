import React, { useState, useEffect } from 'react';
import BottomSheet from './BottomSheet';
import './DarkForm.css';

const DarkForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const phoneNumbers = ['01211115269', '01122431668', '01010102148', '01201809998', '01032944852', '01152670717', '01113863006'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('https://europe-west6-service-booking-99250.cloudfunctions.net/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSuccess('Order created successfully!');
      setName('');
      setPhone('');
    } catch (error) {
      setError('Failed to create order. Please try again.');
      console.error('Error creating order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  useEffect(() => {
    if (isBottomSheetOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isBottomSheetOpen]);

  return (
    <>
      <button onClick={openBottomSheet}>
        {isSubmitting ? 'Submitting...' : 'Reserve'}
      </button>

      <div style={{ height: '150px' }}></div>

      <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet} phoneNumbers={phoneNumbers}>
        <form className='dark-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              required
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

          <button type='submit'>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {error && <p className='error'>{error}</p>}
          {success && <p className='success'>{success}</p>}
        </form>
      </BottomSheet>
    </>
  );
};

export default DarkForm;
