import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="footer-title">About Us</h2>
        <p className="footer-text">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="footer-section">
        <h2 className="footer-title">Contact</h2>
        <p className="footer-text">Email: info@example.com</p>
        <p className="footer-text">Phone: +123 456 7890</p>
      </div>
      <div className="footer-section">
        <h2 className="footer-title">Follow Us</h2>
        <p className="footer-text">Facebook | Twitter | Instagram</p>
      </div>
    </footer>
  );
}

export default Footer;
