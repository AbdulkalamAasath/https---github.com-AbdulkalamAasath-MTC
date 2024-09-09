import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const FolioDetails = () => {
  const [Data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:4000/MTC/getFolio`, {
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
              <th style={{ border: '1px solid black', padding: '10px' }}>Folio Number</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((value, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '10px' }}>{value.FolioNumber}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{value.Quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FolioDetails;
