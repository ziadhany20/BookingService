// components/Card.tsx
"use client";

import './AllPackagesSection.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import getDirection from '@/Utils/utils';
import { firebaseapp } from '../firebase'; // Adjust the path as needed
import { getAnalytics, logEvent } from 'firebase/analytics';

interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  isTopDeal: boolean;
  discount: number;
  imageUrl: string;
}

const AllPackagesSection = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.post(
          'https://europe-west6-service-booking-99250.cloudfunctions.net/getAllPackages'
        );
        setPackages(response.data);
      } catch (err) {
        setError('Error fetching packages.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  function handleClick(pkg: Package) {
    logEvent(getAnalytics(firebaseapp), 'select_package', {
      content_type: 'package',
      content_id: pkg.id,
      content_name: pkg.title,
      value: pkg.price,
    });

    router.push(`/details/${pkg.id}`);
  }

  const limitDescription = (description: string, lineLimit: number) => {
    const lines = description.split('\n');
    return lines.slice(0, lineLimit).join('\n') + (lines.length > lineLimit ? '...' : '');
  };

  return (
    <div className='cards-container'>
      {packages.map(pkg => (
        <div className='Container' key={pkg.id} style={{
          direction: getDirection(pkg.title)
        }}>
          <img className='cimg' src={pkg.imageUrl} alt={pkg.title} />
          <h4 className='heading'>
            {pkg.title} 
          </h4>
          <span className='price'>{pkg.price} EGP</span>
          <p className='loc'>
            {limitDescription(pkg.description, 3)} {/* Limit to 3 lines */}
          </p>
          <button className='btnc' onClick={() => handleClick(pkg)}>
            Read more
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllPackagesSection;
