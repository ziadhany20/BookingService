"use client"
import React from 'react';
import './Nav.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logo2.png'

const Navbar: React.FC = ({  }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Image className="logo" src={logo} alt="Your Logo"  width={90} height={90} /> 
      </div>
      <div className="navbar-middle">
        <ul>
          <Link href="#topdeals" style={{ textDecoration: 'none', margin: '10px', color: 'white' }}>Top Deals</Link>
          <Link href="#offers" style={{ textDecoration: 'none', margin: '10px', color: 'white' }}>Offers</Link>
          <Link href="#packages" style={{ textDecoration: 'none', margin: '10px', color: 'white' }}>Packages</Link>
        </ul>
      </div>
      <div className="navbar-right">
        {/* <button className="register-button">Register</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
