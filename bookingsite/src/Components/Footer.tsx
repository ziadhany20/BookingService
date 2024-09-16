import React from 'react';
import './Footer.css';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="footer-title">About Us</h2>
        <p className="footer-text">Oriental SPA</p>
      </div>
      <div className="footer-section">
        <h2 className="footer-title">Contact For Website Creation</h2>
        <Link href={'mailto:brightbytes@proton.me'} className="footer-text">Email: brightbytes@proton.me</Link>
      </div>
    </footer>
  );
}

export default Footer;
