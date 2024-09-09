import React, { useState } from 'react';

const AddFolioPopup = ({ onClose }) => {
    const [newFolio, setNewFolio] = useState('');

    const handleAddFolio = async () => {
        const response = await fetch('http://localhost:4000/MTC/addfolioentry', {
            method: 'POST',
            body: JSON.stringify({ newFolio }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            alert('Folio Number added successfully!');
            onClose(); // Close the popup
        } else {
            alert('Error adding Folio Number');
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '3em', // Increased padding
                borderRadius: '8px',
                width: '400px', // Increased width
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '90%' // Responsive width
            }}>
                <h3 style={{ textAlign: 'center', marginBottom: '1.5em', fontSize: '20px' }}>Add New Folio Number</h3>
                <input
                    value={newFolio}
                    onChange={(e) => setNewFolio(e.target.value)}
                    type="text"
                    placeholder="Enter New Folio Number"
                    style={{ width: '100%',alignContent:'center', padding: '1em', marginBottom: '1.5em', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fefefe', fontSize: '16px' }}
                />
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1em' }}>
                    <button
                        onClick={handleAddFolio}
                        style={{ padding: '1em 2em', border: 'none', backgroundColor: 'black', color: 'white', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px' }}
                    >
                        Add Folio
                    </button>
                    <button
                        onClick={onClose}
                        style={{ padding: '1em 2em', border: 'none', backgroundColor: 'grey', color: 'white', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px' }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddFolioPopup;
