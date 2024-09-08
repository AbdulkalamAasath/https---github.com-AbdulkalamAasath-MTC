import React, { useState } from 'react';
import Navbar from './Navbar';
import Enquiry from './Enquiry';

const Main = () => {

 
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f7f7', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <Enquiry />
      <div className="container" style={{ display: 'flex', padding: '2em' }}>
      </div>
    </div>
  );
};





export default Main;
