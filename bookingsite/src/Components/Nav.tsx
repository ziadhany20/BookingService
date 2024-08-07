import React from 'react';
import './Nav.css';
import booke from '../app/booke.png'; // Import the image file
import Link from 'next/link';

interface NavbarProps {
  logoSrc: string; // Replace with your image type if needed
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <img className='logo' src={logoSrc} alt="Your Logo" /> */}
      </div>
      <div className="navbar-middle">
        <ul>
          <Link href={'#topdeals'} style={{textDecoration: 'none', margin: '10px', color: 'white'}}>Top Deals</Link>
          <Link href={'#offers'} style={{textDecoration: 'none', margin: '10px', color: 'white'}}>Offers</Link>
          <Link href={'#packages'} style={{textDecoration: 'none', margin: '10px', color: 'white'}}>Packages</Link>
        </ul>
      </div>
      <div className="navbar-right">
        {/* <button className="register-button">Register</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
