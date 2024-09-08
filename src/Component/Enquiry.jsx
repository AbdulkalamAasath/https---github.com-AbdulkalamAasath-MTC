import React, { useState } from 'react';
import Navbar from './Navbar';

const Enquiry = () => {
    // State hooks for form inputs
    const [entryDate, setEntryDate] = useState('');
    const [alphaLetter, setAlphaLetter] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [entryTime, setEntryTime] = useState('');
    const [csReport, setCsReport] = useState('');

    const handleSubmit = async(e) =>
        {
             e.preventDefault()
             const data = {Entrydate:entryDate,Alphaletter:alphaLetter,DueDate:dueDate,EntryTime:entryTime,Csreport:csReport}
             const response = await fetch(`http://localhost:4000/MTC/enquiryentry`, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json',
              }
            });
            if(response.ok)
            {
              window.alert("Data stored")
              console.log("Data stored")
              window.location.reload()
            }
        }
    // Inline styles
    const styles = {
        navbar: {
            backgroundColor: '#ffffff',
            color: '#000000',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 20px',
            alignItems: 'center',
        },
        navbarBrand: {
            fontSize: '20px',
        },
        navbarMenu: {
            display: 'flex',
            listStyleType: 'none',
            alignItems: 'center',
        },
        navItem: {
            marginLeft: '20px',
            position: 'relative',
        },
        navLink: {
            color: '#000000',
            textDecoration: 'none',
            padding: '10px',
        },
        dropdownMenu: {
            display: 'none',
            position: 'absolute',
            backgroundColor: '#ffffff',
            listStyleType: 'none',
            padding: '10px',
            marginTop: '10px',
            borderRadius: '4px',
        },
        dropdownMenuShow: {
            display: 'block',
        },
        profile: {
            fontSize: '24px',
            marginLeft: '20px',
        },
        container: {
            maxWidth: '1000px',
            margin: '50px auto',
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
        subHeading: {
            fontSize: '20px',
            color: '#000000',
        },
        paragraph: {
            color: '#000000',
            marginBottom: '20px',
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
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #cbd5e0',
            borderRadius: '4px',
            backgroundColor: '#edf2f7',
        },
        formControlFocus: {
            outline: 'none',
            borderColor: '#000000',
            backgroundColor: '#fff',
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
        },
        btnHover: {
            backgroundColor: '#201f1f',
        },
    };

    return (
        <div>
            <Navbar/>
            {/* Form Container */}
            <div style={styles.container}>
                <div className="enquiry-entry">
                    <h2 style={styles.heading}>ENQUIRY ENTRY</h2>
                    <div className="enquiry-details">
                        <h3 style={styles.subHeading}>ENQUIRY DETAILS</h3>
                        <p style={styles.paragraph}>Please fill in the following details to proceed to the next step.</p>
                        <form onSubmit={handleSubmit}>
                            <div style={styles.formGroup}>
                                <label htmlFor="entry-date" style={styles.formLabel}>Entry Date *</label>
                                <input
                                    type="date"
                                    id="entry-date"
                                    style={styles.formControl}
                                    value={entryDate}
                                    onChange={(e) => setEntryDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="alpha-letter" style={styles.formLabel}>Alpha Letter *</label>
                                <input
                                    type="text"
                                    id="alpha-letter"
                                    style={styles.formControl}
                                    placeholder="A - Z"
                                    value={alphaLetter}
                                    onChange={(e) => setAlphaLetter(e.target.value)}
                                    required
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="due-date" style={styles.formLabel}>Due Date *</label>
                                <input
                                    type="date"
                                    id="due-date"
                                    style={styles.formControl}
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="entry-time" style={styles.formLabel}>Entry Time Before 2:30PM</label>
                                <input
                                    type="time"
                                    id="entry-time"
                                    style={styles.formControl}
                                    placeholder="Before 2:30PM"
                                    value={entryTime}
                                    onChange={(e) => setEntryTime(e.target.value)}
                                    required
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="cs-report" style={styles.formLabel}>C.S. Report *</label>
                                <input
                                    type="text"
                                    id="cs-report"
                                    style={styles.formControl}
                                    placeholder="Month & Year format (MM/YYYY)"
                                    value={csReport}
                                    onChange={(e) => setCsReport(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" style={styles.btn}>Next</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enquiry;
