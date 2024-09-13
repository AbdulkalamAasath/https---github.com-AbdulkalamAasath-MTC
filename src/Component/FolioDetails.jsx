//FolioDetails.jsx
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
            <th style={tableHeaderStyle}>FolioNumber</th>
            <th style={tableHeaderStyle}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((value, index) => (
              <tr key={index}>
          <td style={tableCellStyle}>{value.FolioNumber}</td> 
          <td style={tableCellStyle}>{value.Quantity}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  fontWeight: 'bold',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'center',
};

export default FolioDetails;
