import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Your logo or footer branding goes here */}
          <img src="logo.png" alt="Your Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          {/* Your social media icons or links go here */}
          <a href="#" target="_blank"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#" target="_blank"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="#" target="_blank"><img src="instagram-icon.png" alt="Instagram" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;