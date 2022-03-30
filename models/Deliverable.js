
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverableSchema = new Schema({
Underscoreid:String , 


dName:String , 


dStatus:String , 


dDate:String 



})

module.exports = {
  Deliverable : mongoose.model('deliverable', deliverableSchema),
}

