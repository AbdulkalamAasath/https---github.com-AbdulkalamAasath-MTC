import React from 'react'
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Enquiry from './Component/Enquiry'
import FolioEntry from './Component/FolioEntry'
import Main from './Component/Main'
import NewFolio from './Component/NewFolio'
import AddFolioPopup from './Component/AddFolioPopup'
import EnquiryDetails from './Component/EnquiryDetails'
import FolioDetails from './Component/FolioDetails'
import EnquirySupplier from './Component/EnquirySupplier'
import SupplierDetails from './Component/SupplierDetails'
import SupplierEnquiry from './Component/SupplierEnquiry'

const App = () => {
  return (
    <div>
    <BrowserRouter>
         <Routes>
         <Route path='/' element={<Main></Main>}></Route>
          <Route path='/Enquiry-Entry' element={<Enquiry></Enquiry>}></Route>
          <Route path='/Folio-Entry' element={<FolioEntry></FolioEntry>}></Route>
          <Route path='/New-Folio' element={<NewFolio/>}></Route>
          <Route path='/foliopage' element={<AddFolioPopup/>}></Route>
          <Route path='/Enquiry-Details' element={<EnquiryDetails/>}></Route>
          <Route path='/Folio-Details' element={<FolioDetails/>}></Route>
          <Route path='/Supplier-Enquiry' element={<SupplierEnquiry/>}></Route>
          <Route path='/Supplier-Details' element={<SupplierDetails/>}></Route>
         </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
