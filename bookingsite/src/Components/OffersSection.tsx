
"use client";
import './AllPackagesSection.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getDirection from '@/Utils/utils';
import { getAnalytics, logEvent } from "firebase/analytics";
import { useRouter } from 'next/navigation';
import { firebaseapp } from '../firebase'; // Adjust the path as needed
interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  isTopDeal: boolean;
  discount: number;
  imageUrl: string;
}

function OffersSection() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.post('https://europe-west6-service-booking-99250.cloudfunctions.net/getDiscountedPackages');
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

  function handleClick(pkg: Package) {
    logEvent(getAnalytics(firebaseapp), 'select_offer', {
      content_type: 'package',
      content_id: pkg.id,
      content_name: pkg.title,
      value: pkg.price,
    });

    router.push(`/details/${pkg.id}`);
  }

  return (
    <div className='cards-container'>
      {packages.map(pkg => (
        <div className='Container' key={pkg.id} style={{
          direction: getDirection(pkg.title)
        }}>
          <img className='cimgg' src={pkg.imageUrl} alt={pkg.title} />
          <h4 className='heading'>
            {pkg.title} <span className='old'>{pkg.price + (pkg.discount / 100) * pkg.price}</span> <span className='price'>{pkg.price}$</span>
          </h4>
          <p className='loc'>{pkg.description}</p>
          <button className='btnc' onClick={() => handleClick(pkg)}>
            Read more
          </button>
        </div>
      ))}
    </div>
  );
}

export default OffersSection;
