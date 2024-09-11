import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const SupplierDetails = () => {
  const [Data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:4000/MTC/getSupplierDetails`, {
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
              <th style={{ border: '1px solid black', padding: '10px' }}>Supplier Enquiry Number</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Stu.SupplierDetails</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((value, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '10px' }}>{value.SupplierEnquiry}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{value.StuSupplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SupplierDetails;
