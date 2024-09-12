import React, { useState } from 'react'
import Navbar from './Navbar'

const ListEnquiry = () => {

    const [date,setDate] = useState('')
    const [alpha,setAlpha] = useState('')
    const [Data,setData] = useState([])
    const [tab,setTable] = useState(false)
    const handelclick = async(e) =>
    {
        e.preventDefault()
        const data = {date:date,alpha:alpha}
        const response = await fetch(`http://localhost:4000/MTC/getEnquiry`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
          });
          const json = await response.json();
          if (!response.ok) {
            console.log("Error in response");
          }
          if (response.ok) {
            setData(json);
            setTable(true)
          }
          console.log(json)
    }
    console.log(Data)
    return (
    <div>
        <Navbar></Navbar>
      {!tab && <form onSubmit={(e) => handelclick(e)}>
        <label>Date</label>
        <input type='text' value={date} onChange={(e) => (setDate(e.target.value))}></input>
        <label>Alpha Letter</label>
        <input type='text' value={alpha} onChange={(e) => (setAlpha(e.target.value))}></input>
        <button>submit</button>
      </form>}
      {
        tab  &&
        <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Entry Date</th>
            <th>Alpha Letter</th>
            <th>Due Date</th>
            <th>Entry Time</th>
            <th>Folio Number</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Data.length > 0 && Data.map((value) => (
            <tr key={value.id}>
              <td>{new Date(value.EntryDate).toLocaleDateString()}</td> {/* Formatting the date */}
              <td>{value.AlphaLetter}</td>
              <td>{new Date(value.DueDate).toLocaleDateString()}</td> {/* Formatting the date */}
              <td>{value.EntryTime}</td>
              <td>
                {value.Folios.length > 0 && (
                  <ul>
                    {value.Folios.map((v, index) => (
                      <li key={index}>{v.Folio_Number}</li>
                    ))}
                  </ul>
                )}
              </td>
              <td>
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
      
      }
    </div>
  )
}

export default ListEnquiry
