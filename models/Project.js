
const { ProjectPImageSchema } =require('./ProjectPImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


pImage:  
ProjectPImageSchema
 , 


pTitle:String , 


pStart:String , 


pEnd:String , 


pGA:String , 




 pWorkpackage: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'workpackage'
  }

]
, 

pAbstract:String , 




 pDeliverable: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'deliverable'
  }

]
, 

pWebsite:String , 


pDuration:String 



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

