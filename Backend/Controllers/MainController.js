const Data = require('../Modules/Enquiry')
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
module.exports = {DataEntry}