import React, { useState } from 'react';
import './Checkout.css'; // Import the CSS file for styling

function Checkout({ onCheckout }) {
  const [vehicleNumber, setVehicleNumber] = useState('');

  const handleCheckoutClick = () => {
    // Validate vehicle number if needed
    if (vehicleNumber.trim() === '') {
      alert('Please enter a vehicle number.');
      return;
    }

    // Call the onCheckout function passing the vehicle number
    onCheckout(vehicleNumber);
    // Reset the vehicle number input field after checkout
    setVehicleNumber('');
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <label htmlFor="vehicleNumber">Vehicle Number:</label>
        <input
          type="text"
          id="vehicleNumber"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          placeholder="Enter vehicle number"
        />
        <button onClick={handleCheckoutClick}>Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;

