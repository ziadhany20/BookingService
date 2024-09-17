"use client";
import './AllPackagesSection.css';
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import getDirection from '@/Utils/utils';
import { getAnalytics, logEvent } from "firebase/analytics";
import { useRouter } from 'next/navigation';
import { initFirebase, firebaseapp } from '../firebase'; // Ensure the path is correct

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
    // Ensure Firebase is initialized before using any Firebase-related functions
    initFirebase();

    const fetchPackages = async () => {
      try {
        const response = await axios.post(
          'https://europe-west6-service-booking-99250.cloudfunctions.net/getDiscountedPackages'
        );
        setPackages(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch packages');
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleClick = useCallback((pkg: Package) => {
    // Ensure that Firebase Analytics is properly initialized
    const analytics = getAnalytics(firebaseapp);

    // Log the event to Firebase Analytics
    logEvent(analytics, 'select_offer', {
      content_type: 'package',
      content_id: pkg.id,
      content_name: pkg.title,
      value: pkg.price,
    });

    // Navigate to the package details page
    router.push(`/details/${pkg.id}`);
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='cards-container'>
      {packages.map((pkg) => (
        <div
          className='Container'
          key={pkg.id}
          style={{
            direction: getDirection(pkg.title),
          }}
        >
          <img className='cimg' src={pkg.imageUrl} alt={pkg.title} />
          <h4 className='heading'>
            {pkg.title}{' '}
            <span className='old'>
              {((pkg.price / (1 - pkg.discount / 100))).toFixed(2)}$
            </span>{' '}
            <span className='price'>{pkg.price}$</span>
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
