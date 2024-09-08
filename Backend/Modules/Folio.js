const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EntrySchema = new Schema(
{
   FolioNumber:{type:String},
   Quantity:{type:String} 
}
)  
module.exports = mongoose.model('Folio-Entry',EntrySchema)