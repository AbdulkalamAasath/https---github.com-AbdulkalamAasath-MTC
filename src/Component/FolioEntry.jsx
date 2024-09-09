import React, { useState } from 'react';
import Navbar from './Navbar';

const FolioEntry = () => {
    const [Fn, SetFn] = useState('');
    const [qn, SetQn] = useState('');
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [newFolio, setNewFolio] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        const data = { Fn, qn };
        const response = await fetch('http://localhost:4000/MTC/updatefolioentry', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const result = await response.json();
            if (result === null) {
                setError('Folio Number is not Available');
                setShowPopup(true);
            } else {
                window.alert('Data stored');
                console.log('Data stored');
                window.location.reload();
            }
        }
    };

    const handleAddFolio = async () => {
        const response = await fetch('http://localhost:4000/MTC/addfolioentry', {
            method: 'POST',
            body: JSON.stringify({ newFolio }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            setShowPopup(false);
            setNewFolio('');
            // Optionally, you can also refetch or reload to reflect the changes
        }
    };

    return (
        <div>
            <Navbar />
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
                    maxWidth: '800px'
                }}>
                    <h1 style={{ fontSize: '24px', marginBottom: '1em', textAlign: 'center' }}>FOLIO ENTRY</h1>
                    <form onSubmit={handleClick}>
                        <h2 style={{ marginBottom: '1em', textAlign: 'center' }}>FOLIO & QUANTITY DETAILS</h2>
                        <p style={{ textAlign: 'center' }}>Please enter the Folio number and quantity of the product.</p>

                        <label htmlFor="folio-number" style={{ display: 'block', marginBottom: '0.5em', fontWeight: 'bold' }}>Folio Number *</label>
                        <input
                            value={Fn}
                            onChange={(e) => SetFn(e.target.value)}
                            type="text"
                            id="folio-number"
                            placeholder="Enter Folio Number"
                            required
                            style={{ width: '100%', padding: '0.8em', marginBottom: '1em', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fefefe' }}
                        />
                        <small style={{ display: 'block', marginBottom: '1em', color: '#999' }}>5 Digit Number (11001)</small>

                        <label htmlFor="quantity" style={{ display: 'block', marginBottom: '0.5em', fontWeight: 'bold' }}>Quantity *</label>
                        <input
                            value={qn}
                            onChange={(e) => SetQn(e.target.value)}
                            type="number"
                            id="quantity"
                            placeholder="Enter Quantity"
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
                        {error && (
                            <div style={{ color: 'red', marginTop: '1em', textAlign: 'center' }}>{error}</div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FolioEntry;
