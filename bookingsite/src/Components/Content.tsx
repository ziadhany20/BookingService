// components/Content.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Content.css'
interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  isTopDeal: boolean;
  discount: number;
  imageUrl: string;
}

interface ContentProps {
  id: string;
}

const Content: React.FC<ContentProps> = ({ id }) => {
  const [pkg, setPkg] = useState<Package | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.post(
          'https://europe-west6-service-booking-99250.cloudfunctions.net/getPackage',
          { id }
        );
        setPkg(response.data);
      } catch (err) {
        setError('Failed to fetch package');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!pkg) {
    return <div>No package found</div>;
  }

  return (
    <div className='Container'>
      <div className='zoz'>
        <img className='cimg' src={pkg.imageUrl} alt={pkg.title} />
        <h4 className='text'>
          {pkg.title} <span className='price'>{pkg.price}$</span>
        </h4>
        <p className='loca'>{pkg.description}</p>
      </div>
    </div>
  );
};

export default Content;
