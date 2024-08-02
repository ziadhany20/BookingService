import React from 'react';
import './Nav.css';
import booke from '../app/booke.png'; // Import the image file

interface NavbarProps {
  logoSrc: string; // Replace with your image type if needed
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className='logo' src = "https://www.cdnlogo.com/logos/h/13/honeybook.svg"  alt="Your Logo" />
      </div>
      <div className="navbar-middle">
        <ul>
          <li>Top Deals</li>
          <li>Offers</li>
          <li>Packages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="register-button">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
