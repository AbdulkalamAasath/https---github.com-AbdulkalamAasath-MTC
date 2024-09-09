import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const EnquiryDetails = () => {
  const [Data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:4000/MTC/getEnquiry`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const json = await response.json();
      if (!response.ok) {
        console.log("Error in response");
      }
      if (response.ok) {
        setData(json);
      }
    }
    fetchData();
  }, [Data]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {Data.length === 0 ? (
        <div> No information available.</div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '10px' }}>Entry Date</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Alpha Letter</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Due Date</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Entry Time</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Cs Report</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((value, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '10px' }}>{value.EntryDate}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{value.AlphaLetter}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{value.DueDate}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{value.EntryTime}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{value.Csreport}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EnquiryDetails;
