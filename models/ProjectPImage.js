
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjectPImageSchema = new Schema({
data:String , 
name:String 
});

module.exports = { ProjectPImageSchema };

