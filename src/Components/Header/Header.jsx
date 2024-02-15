






import React from 'react';
import collegeLogo from '../Assets/images/collegeLogo.jpeg'; 
import './Header.css'; 
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={collegeLogo} alt="College Logo" className="logo" />
      </div>
      <h1 className="heading">JNU Security</h1>
      <div className="button-container">
        <Link  to= "/" >           
          <button className="button check-in">Check-in</button> 
        </Link>
        <Link  to= "/checkout">    
          <button className="button check-out">Check-out</button>
        </Link>
        <Link  to= "/studentinfo"> 
          <button className="button verification">StudentVerification</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;

