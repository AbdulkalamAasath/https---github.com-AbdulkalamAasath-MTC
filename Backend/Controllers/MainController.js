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
  const {sn,alpha,date} = req.body
  const D = new Date(date)
  const data = await Sp.create({Supplier_Number:sn,AlphaLetter:alpha,date:D})
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

const getDataBetweenDates = async (req, res) => {
  const { StartDate, endDate, sn } = req.body;

  try {
    // Validate if StartDate, endDate, and sn are provided
    if (!StartDate || !endDate || !sn) {
      return res.status(400).json({ message: 'StartDate, endDate, and Supplier Number are required.' });
    }

    // Convert to Date objects and validate
    const start = new Date(StartDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).json({ message: 'Invalid date format. Please provide valid dates.' });
    }

    // Fetch data within the date range
    const data = await Sp.find({
      date: {
        $gte: start,
        $lte: end,
      },
      Supplier_Number: sn
    });

    // Check if data is found
    if (!data.length) {
      return res.status(404).json({ message: 'No data found for the given date range and supplier number.' });
    }

    // Return the fetched data
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const SupplierArrayUpdate = async (req, res) => {
  try {
    const { sc, ssc } = req.body; 
    const { id } = req.params;

    const data = await Sp.findOneAndUpdate(
      { _id: id }, 
      { $push: { Supplier_Entry:{ Supplier_code: sc, Stu_Supplier_code: ssc } } },
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


module.exports = {DataEntry,FolioEntry,FolioUpdate,getEnquiry,getFolio,SupplierEntry,SupplierEntryDetails,FolioArrayUpdate,getDataBetweenDates,SupplierArrayUpdate}