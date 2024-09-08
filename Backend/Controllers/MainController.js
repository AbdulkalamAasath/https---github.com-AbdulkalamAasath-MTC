const Data = require('../Modules/Enquiry')
const Folio = require('../Modules/Folio')
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
  const {Fn,qn} = req.body
  const data = await Folio.create({FolioNumber:Fn,Quantity:qn})
  res.status(200).json(data)

}
catch(err)
{
  res.status(400).json(err.message)
}

}
module.exports = {DataEntry,FolioEntry}