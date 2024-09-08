import React, { useState } from 'react'
import Navbar from './Navbar'

const FolioEntry = () => {
    const [Fn,SetFn] = useState(null)
    const [qn,SetQn] = useState(null)
    const handelclick = async(e) =>
    {
        e.preventDefault()
             const data = {Fn:Fn,qn:qn}
             const response = await fetch(`http://localhost:4000/MTC/folioentry`, {
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
  return (
    <div>
    <Navbar />
    <div className="content" style={{ width: '80%', padding: '2em', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <h1 style={{ fontSize: '24px', marginBottom: '1em' }}>FOLIO ENTRY</h1>
    <div className="form-container" style={{ backgroundColor: '#fff', padding: '2em', borderRadius: '8px', border: '1px solid #ddd' }}>
      <form onSubmit={(e) => handelclick(e)}>
        <h2 style={{ marginBottom: '1em' }}>FOLIO & QUANTITY DETAILS</h2>
        <p>Please enter the Folio number and quantity of the product.</p>

        <label htmlFor="folio-number" style={{ display: 'block', marginBottom: '0.5em', fontWeight: 'bold' }}>Folio Number *</label>
        <input value={Fn} onChange={(e) => (SetFn(e.target.value))} type="text" id="folio-number" placeholder="Enter Folio Number" required style={{ width: '100%', padding: '0.8em', marginBottom: '1em', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fefefe' }} />
        <small style={{ display: 'block', marginBottom: '1em', color: '#999' }}>5 Digit Number (11001)</small>

        <label htmlFor="quantity" style={{ display: 'block', marginBottom: '0.5em', fontWeight: 'bold' }}>Quantity *</label>
        <input value={qn} onChange={(e) => (SetQn(e.target.value))} type="number" id="quantity" placeholder="Enter Quantity" required style={{ width: '100%', padding: '0.8em', marginBottom: '1em', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fefefe' }} />

        <div className="buttons" style={{ display: 'flex', justifyContent: 'flex-start', gap: '1em' }}>
          <button type="submit" className="submit-btn" style={{ padding: '0.8em 1.5em', border: 'none', backgroundColor: 'black', color: 'white', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>Submit</button>
        </div>
      </form>
    </div>
  </div>
  </div>
  )
}

export default FolioEntry
