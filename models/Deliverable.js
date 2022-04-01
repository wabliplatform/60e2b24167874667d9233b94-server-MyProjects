
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverableSchema = new Schema({
Underscoreid:String , 


dName:String , 


dDate:String , 


dLeader:String , 


dStatus:String 



})

module.exports = {
  Deliverable : mongoose.model('deliverable', deliverableSchema),
}

