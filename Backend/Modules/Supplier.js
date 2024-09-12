const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EntrySchema = new Schema(
{
   date:{type:Date}, 
   Supplier_Number:{type:String},
   AlphaLetter:{type:String},
   Supplier_Entry:[
      {
         Supplier_code:{type:String},
         Stu_Supplier_code:{type:String} 
      }
   ]
}
)  
module.exports = mongoose.model('Supplier-Entry',EntrySchema)