import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';

const NewFolio = () => {
  const [Fn, setFn] = useState('');

  const handelclick = async (e) => {
    e.preventDefault();
    const data = { Fn: Fn };
    const response = await fetch(`http://localhost:4000/MTC/folioentry`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      window.alert('New Folio Number stored');
      console.log('Data stored');
      window.location.reload();
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="content" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f4f4f4'
            }}>
                <div className="form-container" style={{
                    backgroundColor: '#fff',
                    padding: '2em',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    width: '80%',
                    maxWidth: '800px',
                    marginBottom:'10%'
                }}>
                    <form onSubmit={(e) => handelclick(e)}>
                        <h2 style={{ marginBottom: '1em', textAlign: 'center' }}>NEW FOLIO  DETAILS</h2>
                        <p style={{ textAlign: 'center' }}>Please enter the Folio number and quantity of the product.</p>

                        <label htmlFor="folio-number" style={{ display: 'block', marginBottom: '0.5em', fontWeight: 'bold' }}>New Folio Number</label>
                        <input
                            value={Fn}
                            onChange={(e) => setFn(e.target.value)}
                            type="text"
                            id="folio-number"
                            placeholder="Enter Folio Number"
                            required
                            style={{ width: '100%', padding: '0.8em', marginBottom: '1em', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fefefe' }}
                        />
                        <div className="buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1em' }}>
                            <button
                                type="submit"
                                className="submit-btn"
                                style={{ padding: '0.8em 1.5em', border: 'none', backgroundColor: 'black', color: 'white', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  );
};

export default NewFolio;
