const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EntrySchema = new Schema(
{
   SupplierEnquiry:{type:String},
   StuSupplier:{type:String},
    
}
)  
module.exports = mongoose.model('Supplier-Entry',EntrySchema)