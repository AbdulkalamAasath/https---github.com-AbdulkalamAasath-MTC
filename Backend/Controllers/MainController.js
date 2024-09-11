const Data = require('../Modules/Enquiry')
const Folio = require('../Modules/Folio')
const Sp = require('../Modules/Supplier')
const DataEntry = async(req,res) =>
{
    try{
  const data = {
   Entrydate: new Date(req.body.Entrydate),  
   Alphaletter: req.body.Alphaletter,
   DueDate: new Date(req.body.DueDate),     
   EntryTime: req.body.EntryTime,
   Csreport: req.body.Csreport
 }
  const recived = await Data.create({EntryDate:data.Entrydate,AlphaLetter:data.Alphaletter,DueDate:data.DueDate,EntryTime:data.EntryTime,Csreport:data.Csreport})
  res.status(200).json(recived)
 }
 catch(err){
    res.status(400).json(err.message)
 }
}

const FolioEntry = async(req,res) => {
  try{
  const {Fn} = req.body
  const data = await Folio.create({FolioNumber:Fn})
  res.status(200).json(data)
}
catch(err)
{
  res.status(400).json(err.message)
}

}
const FolioUpdate = async(req,res) => {
  try{
  const {Fn,qn} = req.body
  const data = await Folio.findOneAndUpdate({FolioNumber:Fn},{Quantity:qn},{new:true})
  res.status(200).json(data)
}
catch(err)
{
  res.status(400).json(err.message)
}

}
const getFolio = async(req,res) => {
  try{
  const data = await Folio.find()
  res.status(200).json(data)
}
catch(err)
{
  res.status(400).json(err.message)
}

}
const getEnquiry = async(req,res) => {
  try{
  const data = await Data.find()
  res.status(200).json(data)
}
catch(err)
{
  res.status(400).json(err.message)
}

}

const SupplierEntry = async(req,res) => {
  try{
  const {sc,ssc} = req.body
  const data = await Sp.create({SupplierEnquiry:sc,StuSupplier:ssc})
  res.status(200).json(data)
}
catch(err)
{
  res.status(400).json(err.message)
}
}
const SupplierEntryDetails = async(req,res) => {
  try{
  const data = await Sp.find()
  res.status(200).json(data)
}
catch(err)
{
  res.status(400).json(err.message)
}
}
const FolioArrayUpdate = async (req, res) => {
  try {
    const { Fn, qn } = req.body; // Destructuring from req.body
    const { id } = req.params; // Destructuring from req.params

    const data = await Data.findOneAndUpdate(
      { _id: id }, 
      { $push: { Folios: { Folio_Number: Fn, Quantity: qn } } },
      { new: true } 
    );

    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {DataEntry,FolioEntry,FolioUpdate,getEnquiry,getFolio,SupplierEntry,SupplierEntryDetails,FolioArrayUpdate}