import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>For help, contact:</p>
          <p>Helpline: 123-456-7890</p>
          <p>Email: help@jnusecurity.com</p>
        </div>
        <p>&copy; 2024 JNU Security. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
