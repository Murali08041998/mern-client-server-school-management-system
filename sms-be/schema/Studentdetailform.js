const mongoose=require('mongoose')
const validator=require('validator')
const StudentSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    LastName:{type:String,required:true},
    RollNumber:{type:String,required:true},
    Year:{type:Number,required:true},
    TotalSubject:{type:Number,required:true},
    Mobile:{
        type:String,
        required:true,
        validate:(value)=>validator.isNumeric(value) && value.length===10
    },
    Department:{
        type:String,
        required:true
    },
    createdAt:{type:Date,default:Date.now()}
    
},
{
    collection:'Studentdetails',
    versionKey:false
})
const StudentDetailModel = mongoose.model('Studentdetails',StudentSchema)
module.exports={StudentDetailModel}