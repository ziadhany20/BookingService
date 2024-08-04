// components/PackageDetailComponent.tsx
import React from 'react';

interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  isTopDeal: boolean;
  discount: number;
  imageUrl: string;
}

interface PackageDetailComponentProps {
  pkg: Package;
}

const PackageDetailComponent: React.FC<PackageDetailComponentProps> = ({ pkg }) => {
  return (
    <div>
      <h1>{pkg.title}</h1>
      <img src={pkg.imageUrl} alt={pkg.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{pkg.description}</p>
      <p>Price: {pkg.price}$</p>
      <p>Discount: {pkg.discount}%</p>
      {pkg.isTopDeal && <p>This is a top deal!</p>}
    </div>
  );
};

export default PackageDetailComponent;
