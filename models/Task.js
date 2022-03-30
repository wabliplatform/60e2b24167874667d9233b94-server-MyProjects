
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
Underscoreid:String , 


tName:String , 


tStart:String , 


tEnd:String , 


tPMs:String , 


tDescription:String 



})

module.exports = {
  Task : mongoose.model('task', taskSchema),
}

