import React, { useState } from 'react'

const Enquiryentry = () => {
  const [entrydate,setEntry] = useState('')
  const [Alpha,setAlpha] = useState('')
  const [Duedate,setDuedate]=useState('')
  const [csreport,setCsreport] =useState('')
  const [EntryTime,setEntryTime] = useState('')
  const handelclick = async(e) =>
  {
       e.preventDefault()
       const data = {Entrydate:entrydate,Alphaletter:Alpha,DueDate:Duedate,EntryTime:csreport,Csreport:EntryTime}
       const response = await fetch(`http://localhost:4000/MTC/enquiryentry`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if(response.ok)
      {
        console.log("Data stored")
        console.log(await response.json())
      }
  }
  return (
    <div>
      <form onSubmit={ (e)=>handelclick(e)}>
        <label htmlFor='date'>Entry Date</label>
        <input type='date' value={entrydate} onChange={(e) =>(setEntry(e.target.value))}></input>
        <label htmlFor='AL'>Alpha Letter</label>
        <input type='text' value={Alpha} onChange={(e) =>(setAlpha(e.target.value))}></input>
        <label htmlFor='Duedate'>Due Date</label>
        <input type='date'  value={Duedate} onChange={(e) =>(setDuedate(e.target.value))}></input>
        <label htmlFor='Entry-time'>Entry-time</label>
        <input type='time'  value={EntryTime} onChange={(e) =>(setEntryTime(e.target.value))}></input> 
        <label htmlFor='cs-report'>cs Report</label>
        <input type='text'  value={csreport} onChange={(e) =>(setCsreport(e.target.value))}></input> 
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Enquiryentry
