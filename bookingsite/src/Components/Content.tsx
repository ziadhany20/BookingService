// components/Content.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Content.css'
import getDirection from '@/Utils/utils';
import DarkForm from './DarkForm';
import Head from 'next/head';
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
    <>
      <Head>
        <title>{pkg?.title ?? "Loading..."}</title>
        <meta name="description" content={pkg?.description ?? "Loading..."} />
        <meta property="og:title" content={pkg?.title ?? "Loading..."} />
        <meta property="og:description" content={pkg?.description ?? "Loading..."} />
        <meta property="og:image" content={pkg?.imageUrl ?? "Loading..."} />
      </Head>
      <div className='Container' style={{
        direction: getDirection(pkg.title)
      }}>
        <div className='zoz'>
          <img className='cimg' src={pkg.imageUrl} alt={pkg.title} />
          <div className="wordss">
            <h4 className='text'>
              {pkg.title} <span className='price'>{pkg.price}$</span>
            </h4>
            <p className='loca'>{pkg.description}</p>
            <DarkForm />
          </div>

        </div>


      </div>
    </>
  );
};


export default Content;
