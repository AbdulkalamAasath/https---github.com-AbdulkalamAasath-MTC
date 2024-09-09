import React from 'react'
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Enquiry from './Component/Enquiry'
import FolioEntry from './Component/FolioEntry'
import Main from './Component/Main'
import NewFolio from './Component/NewFolio'

const App = () => {
  return (
    <div>
    <BrowserRouter>
         <Routes>
         <Route path='/' element={<Main></Main>}></Route>
          <Route path='/Enquiry-Entry' element={<Enquiry></Enquiry>}></Route>
          <Route path='/Folio-Entry' element={<FolioEntry></FolioEntry>}></Route>
          <Route path='/New-Folio' element={<NewFolio/>}></Route>
         </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
