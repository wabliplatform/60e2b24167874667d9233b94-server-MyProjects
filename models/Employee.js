
const { ProjectPImageSchema } =require('./ProjectPImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
Underscoreid:String , 


eName:String , 


eSurname:String , 


eImage:  
ProjectPImageSchema
 , 




 eProject: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'project'
  }

]



})

module.exports = {
  Employee : mongoose.model('employee', employeeSchema),
}

