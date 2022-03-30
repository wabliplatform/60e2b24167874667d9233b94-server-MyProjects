
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workpackageSchema = new Schema({
Underscoreid:String , 


wName:String , 


wPMs:String , 


wRole:String 



})

module.exports = {
  Workpackage : mongoose.model('workpackage', workpackageSchema),
}

