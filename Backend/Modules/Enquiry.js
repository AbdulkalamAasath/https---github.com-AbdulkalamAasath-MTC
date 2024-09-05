const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EntrySchema = new Schema(
{
    EntryDate:{type:Date},
    AlphaLetter:{type:String},
    DueDate:{type:Date},
    EntryTime:{type:String},
    Csreport:{type:String} 
}
)  
module.exports = mongoose.model('Enquire-Entry',EntrySchema)