import React, { useState } from 'react';
import Navbar from './Navbar';

// Define common styles for both components
const styles = {
    container: {
        maxWidth: '1000px',
        margin: '9% auto',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '24px',
        color: '#000000',
        marginBottom: '20px',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '10px',
    },
    formGroup: {
        marginBottom: '20px',
    },
    formLabel: {
        display: 'block',
        marginBottom: '8px',
        color: '#000000',
        fontWeight: 'bold',
    },
    formControl: {
        width: '98%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #cbd5e0',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    },
    btn: {
        display: 'inline-block',
        backgroundColor: '#000000',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        margin: '30px 45%',
    },
    table: {
        width: '100%',
        textAlign: 'left',
        borderCollapse: 'collapse',
    },
    tableHeader: {
        backgroundColor: '#f2f2f2',
        color: '#000000',
        padding: '10px',
    },
    tableCell: {
        padding: '10px',
        border: '1px solid #ddd',
    },
    error: {
        color: 'red',
        marginTop: '1em',
        textAlign: 'center',
    },
};

const ListEnquiry = () => {
    const [date, setDate] = useState('');
    const [alpha, setAlpha] = useState('');
    const [Data, setData] = useState([]);
    const [tab, setTable] = useState(false);

    const handelclick = async (e) => {
        e.preventDefault();
        const data = { date, alpha };
        try {
            const response = await fetch('http://localhost:4000/MTC/getEnquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const json = await response.json();
            setData(json);
            setTable(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Navbar />
            {!tab && (
                <div style={styles.container}>
                    <h2 style={styles.heading}>List Enquiry</h2>
                    <form onSubmit={handelclick}>
                        <div style={styles.formGroup}>
                            <label htmlFor="date" style={styles.formLabel}>Date</label>
                            <input
                                type="text"
                                id="date"
                                style={styles.formControl}
                                 placeholder="YYYY-MM-DD"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="alpha" style={styles.formLabel}>Alpha Letter</label>
                            <input
                                type="text"
                                id="alpha"
                                style={styles.formControl}
                                 placeholder="A - Z"
                                value={alpha}
                                onChange={(e) => setAlpha(e.target.value)}
                            />
                        </div>
                        <button type="submit" style={styles.btn}>Submit</button>
                    </form>
                </div>
            )}
            {tab && (
                <div style={styles.container}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.tableHeader}>Entry Date</th>
                                <th style={styles.tableHeader}>Alpha Letter</th>
                                <th style={styles.tableHeader}>Due Date</th>
                                <th style={styles.tableHeader}>Entry Time</th>
                                <th style={styles.tableHeader}>Folio Number</th>
                                <th style={styles.tableHeader}>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.length > 0 && Data.map((value) => (
                                <tr key={value.id}>
                                    <td style={styles.tableCell}>{new Date(value.EntryDate).toLocaleDateString()}</td>
                                    <td style={styles.tableCell}>{value.AlphaLetter}</td>
                                    <td style={styles.tableCell}>{new Date(value.DueDate).toLocaleDateString()}</td>
                                    <td style={styles.tableCell}>{value.EntryTime}</td>
                                    <td style={styles.tableCell}>
                                        {value.Folios.length > 0 && (
                                            <ul>
                                                {value.Folios.map((v, index) => (
                                                    <li key={index}>{v.Folio_Number}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </td>
                                    <td style={styles.tableCell}>
                                        {value.Folios.length > 0 && (
                                            <ul>
                                                {value.Folios.map((v, index) => (
                                                    <li key={index}>{v.Quantity}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ListEnquiry;
