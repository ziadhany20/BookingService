// components/Card.tsx
"use client";

import './AllPackagesSection.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import getDirection from '@/Utils/utils';
import { logEvent } from "firebase/analytics";
import { analytics } from '../app/layout';


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

    logEvent(analytics, 'package_click', {
      content_type: 'package',
      content_id: pkg.id,
      content_name: pkg.title,
      value: pkg.price
    });

    router.push(`/details/${pkg.id}`)
  }

  return (
    <div className='cards-container'>
      {packages.map(pkg => (
        <div className='Container' key={pkg.id} style={{
          direction: getDirection(pkg.title)
        }}>
          <img className='cimg' src={pkg.imageUrl} alt={pkg.title} />
          <h4 className='heading'>
            {pkg.title} <span className='price'>{pkg.price}$</span>
          </h4>
          <p className='loc'>{pkg.description}</p>
          <button className='btnc' onClick={() => handleClick(pkg)}>
            Read more
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllPackagesSection;
