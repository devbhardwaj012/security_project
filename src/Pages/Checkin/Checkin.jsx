

import React, { useState } from 'react';
import './Checkin.css'

function VehicleCheckInCard({ onCheckIn }) {
  const [vehicleNumber, setVehicleNumber] = useState('');

  const handleCheckIn = () => {
    // Validate vehicle number if needed
    if (vehicleNumber.trim() === '') {
      alert('Please enter a vehicle number.');
      return;
    }

    // Pass the vehicle number to the parent component for further processing
    onCheckIn(vehicleNumber);
    // Optionally, you can reset the input field after check-in
    setVehicleNumber('');
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2>Vehicle Check-In</h2>
        <div>
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <input
            type="text"
            id="vehicleNumber"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
        </div>
        <button onClick={handleCheckIn}>Check In</button>
      </div>
    </div>
  );
}

export default VehicleCheckInCard;

