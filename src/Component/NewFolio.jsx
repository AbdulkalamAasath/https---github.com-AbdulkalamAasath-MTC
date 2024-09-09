import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const NewFolio = () => {
    const [Fn,setFn] = useState()
    const handelclick = async(e) =>
    {
      e.preventDefault()
      const data = {Fn:Fn}
      const response = await fetch(`http://localhost:4000/MTC/folioentry`, {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
         'Content-Type': 'application/json',
       }
     });
     if(response.ok)
     {
       window.alert("New Folio Number stored")
       console.log("Data stored")
       window.location.reload()
     }

    }
   return (
    <div>
    <Navbar></Navbar>
      <form onSubmit={(e) => handelclick(e)}>
      <label>New Folio Number</label>
      <input type='text' value={Fn} onChange={(e) => (setFn(e.target.value))}></input>
      <button>submit</button>
      </form>
    </div>
  )
}

export default NewFolio
