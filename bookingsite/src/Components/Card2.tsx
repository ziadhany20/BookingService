"use client";
import './Card2.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  isTopDeal: boolean;
  discount: number;
  imageUrl: string;
}

function Card2() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.post('https://europe-west6-service-booking-99250.cloudfunctions.net/getAllPackages');
        setPackages(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch packages');
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='cards-container'>
      {packages.map(pkg => (
        <div className='Containerr' key={pkg.id}>
          <img className='cimgg' src={pkg.imageUrl} alt={pkg.title} />
          <h4 className='headingg'>
            {pkg.title} <span className='old'>{pkg.price + (pkg.discount / 100) * pkg.price}</span> <span className='pricee'>{pkg.price}$</span>
          </h4>
          <p className='locc'>{pkg.description}</p>
          <button className='btncc'>Read more</button>
        </div>
      ))}
    </div>
  );
}

export default Card2;
