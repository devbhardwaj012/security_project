import React, { useState } from 'react';
import './Studentinfo.css' ;

function StudentGetInfo() {
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = async () => {
    setLoading(true);
    setError('');

    try {
      // Call the backend API to verify student information based on the enrollment number
      const response = await fetch(`YOUR_BACKEND_API_ENDPOINT/enrollment/${enrollmentNumber}`);
      if (!response.ok) {
        throw new Error('Failed to verify student information');
      }
      const data = await response.json();
      setStudentInfo(data);
    } catch (error) {
      setError('Failed to verify student information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="student-verification">
      <h2>Student Verification</h2>
      <div>
        <label htmlFor="enrollmentNumber">Enrollment Number:</label>
        <input
          type="text"
          id="enrollmentNumber"
          value={enrollmentNumber}
          onChange={(e) => setEnrollmentNumber(e.target.value)}
        />
      </div>
      <button onClick={handleVerify} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify'}
      </button>

      {error && <p className="error">{error}</p>}

      {studentInfo && (
        <div className="student-info">
          <h3>Student Information</h3>
          <p><strong>Name:</strong> {studentInfo.name}</p>
          <p><strong>School:</strong> {studentInfo.school}</p>
          <p><strong>Centre:</strong> {studentInfo.centre}</p>
          <p><strong>Registered Vehicle Number:</strong> {studentInfo.registeredVehicleNumber}</p>
        </div>
      )}
    </div>
  );
}

export default StudentGetInfo;
