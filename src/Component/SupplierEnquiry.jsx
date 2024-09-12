import React, { useState } from 'react';
import Navbar from './Navbar';

const SupplierEnquiry = () => {
    // State hooks for form inputs
    const [entryDate, setEntryDate] = useState('');
    const [alphaLetter, setAlphaLetter] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, settoDate] = useState('');
    const [Sn, setSn] = useState('');
    const [folio,setFolio] = useState(false)
    const [info,setInfo] = useState(false)
    const [Data,setData] = useState([])
    const [id,setId] = useState('')
    const [fn,setFn] = useState(null)
    const [qn,setQn] = useState(null)
    const [error,setError] = useState()
    const formatDate = (isoDateString) => {
        const date = new Date(isoDateString);
        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      };
    const handleSubmit = async(e) =>
        {
             e.preventDefault()
             const data = {sn:Sn,alpha:alphaLetter,date:entryDate}
             const response = await fetch(`http://localhost:4000/MTC/supplierentry`, {
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
              const json = await response.json()
              setId(json._id)
              setInfo(true)
            }
            
             const value = {StartDate:fromDate,endDate:toDate,sn:Sn}
             const res = await fetch(`http://localhost:4000/MTC/getSupplierDetails`, {
              method: 'POST',
              body: JSON.stringify(value),
              headers: {
                'Content-Type': 'application/json',
              }
            });
            if(res.ok)
            {
              const json = await res.json()
              setData(json)
            }
            else{
                console.log(await res.json())
            }
            
        }
     console.log(Data)
    const handelcontinue = async() =>
    {
        const data = { Fn:fn , qn }
        const res = await fetch('http://localhost:4000/MTC/updatefolioentry', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.ok) {
            const result = await res.json();
            if (result === null) {
                setError('Folio Number is not Available');
            } else {
                const newFolio = {Fn:fn,qn:qn}
                const response = await fetch(`http://localhost:4000/MTC/Folioupdate/${id}`, {
                    method: 'POST',
                    body: JSON.stringify( newFolio ),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if(response.ok)
                {
                    window.alert("Data stored")
                    setFn('')
                    setQn('')
                    setError(null)
                }
            }
        }

    }
    
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
    const handleclose = (e) =>
    {
       e.preventDefault()
       window.location.reload()
    }

    return (
        <div>
            <Navbar/>
            {/* Form Container */}
            {!folio && !info && <div style={styles.container}>
                <div className="enquiry-entry">
                    <h2 style={styles.heading}>ENQUIRY ENTRY</h2>
                    <div className="enquiry-details">
                        <h3 style={styles.subHeading}>Supplier ENQUIRY DETAILS</h3>
                        <p style={styles.paragraph}>Please fill in the following details to proceed to the next step.</p>
                        <form onSubmit={handleSubmit}>
                            <div style={styles.formGroup}>
                                <label htmlFor="entry-date" style={styles.formLabel}>Entry Date</label>
                                <input
                                    type="text"
                                    id="entry-date"
                                    style={styles.formControl}
                                    value={entryDate}
                                    onChange={(e) => setEntryDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="alpha-letter" style={styles.formLabel}>Alpha Letter</label>
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
                                <label htmlFor="cs-report" style={styles.formLabel}>Supplier Number</label>
                                <input
                                    type="text"
                                    id="cs-report"
                                    style={styles.formControl}
                                    placeholder="Supplier Number"
                                    value={Sn}
                                    onChange={(e) => setSn(e.target.value)}
                                    required
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="due-date" style={styles.formLabel}>From Date</label>
                                <input
                                    type=''
                                    id="due-date"
                                    placeholder="yyyy-mm-dd"
                                    style={styles.formControl}
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="entry-time" style={styles.formLabel}>To Date</label>
                                <input
                                    type="text"
                                    id="entry-time"
                                    style={styles.formControl}
                                    placeholder="yyyy-mm-dd"
                                    value={toDate}
                                    onChange={(e) => settoDate(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" style={styles.btn}>Next</button>
                        </form>
                    </div>
                </div>
            </div>}
            {folio && 
            <div> 
                <form onSubmit={(e) => handleclose(e)}>
                <label htmlFor='folio'>folio Number</label>
                <input type='number' id='folio' value ={fn} onChange={(e) => setFn(e.target.value)}></input>
                <label htmlFor='qn'>Quantity</label>
                <input type='number' id='qn' value ={qn} onChange={(e) => setQn(e.target.value)}></input>
                <button type='button'onClick={handelcontinue}>Continue</button>
                <button type='submit'>Close</button>
                {error && (
                            <div style={{ color: 'red', marginTop: '1em', textAlign: 'center' }}>{error}</div>
                        )}
                </form>
            </div>}
            {info &&
             <div>
                {Data.length === 0 ? (
        <div> No information available.</div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '10px' }}>Date</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Alpha Letter</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Supplier Number</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((value, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '10px' }}>{formatDate(value.date)}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{value.Supplier_Number}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{value.AlphaLetter}</td>
              </tr>
            ))}
          </tbody>
         
        </table>
      )}

            </div>}
        </div>
    );
};

export default SupplierEnquiry;
