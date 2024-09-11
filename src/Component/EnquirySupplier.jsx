import React, { useState } from 'react';
import Navbar from './Navbar';

const EnquirySupplier = () => {
    const [sc, SetSc] = useState('');
    const [ssc, SetSsc] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        const data = { sc, ssc };
        const response = await fetch('http://localhost:4000/MTC/supplierentry', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
                window.alert('Data stored');
                console.log('Data stored');
                window.location.reload();
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
                    <h1 style={{ fontSize: '24px', marginBottom: '1em', textAlign: 'center' }}>Enquiry Supplier Entry</h1>
                    <form onSubmit={handleClick}>
                        <p style={{ textAlign: 'center' }}>Please enter the Supplier Code and Stu.Supplier Code.</p>

                        <label htmlFor="Supplier Code" style={{ display: 'block', marginBottom: '0.5em', fontWeight: 'bold' }}>Supplier Code: </label>
                        <input
                            value={sc}
                            onChange={(e) => SetSc(e.target.value)}
                            type="text"
                            id="Supplier Code"
                            placeholder="Enter Supplier Code 'A024' "
                            required
                            style={{ width: '100%', padding: '0.8em', marginBottom: '1em', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fefefe' }}
                        />

                        <label htmlFor="Stu.Supplier Code" style={{ display: 'block', marginBottom: '0.5em', fontWeight: 'bold' }}>Stu.Supplier Code:</label>
                        <input
                            value={ssc}
                            onChange={(e) => SetSsc(e.target.value)}
                            type="text"
                            id="Stu.Supplier Code"
                            placeholder="Enter Stu.Supp Code AVT0001 "
                            required
                            style={{ width: '100%', padding: '0.8em', marginBottom: '1em', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fefefe' }}
                        />

                        <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em' }}>
                            <button
                                type="submit"
                                className="submit-btn"
                                style={{
                                    padding: '0.8em 2em',
                                    border: 'none',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    cursor: 'pointer',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    fontSize: '16px'
                                }}
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="delete-btn"
                                style={{
                                    padding: '0.8em 2em',
                                    border: 'none',
                                    backgroundColor: 'red',
                                    color: 'white',
                                    cursor: 'pointer',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    fontSize: '16px'
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquirySupplier;