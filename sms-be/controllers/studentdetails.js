const {StudentDetailModel}=require('../schema/Studentdetailform')


const PostStudent=async(req,res)=>{
    try {
        let user=await StudentDetailModel.create(req.body)
        res.status(201).send({message:"User Creation Successfully"})
    } catch (error) {
        console.log(error) 
       res.status(500).send({message:"Internal Server Error",error})
    }
}

const EditStudentById=async(req,res)=>{
    try {
        const options={ new: true };
        let user=await StudentDetailModel.updateOne({_id:req.params.id},req.body,options)
        res.status(200).send({message:"Date Fetched Successfully",user})
    } catch (error) {
        console.log(error) 
       res.status(500).send({message:"Internal Server Error",error})
    }
}


const GetAllStudent=async(req,res)=>{
    try {
        let users=await StudentDetailModel.find({},{_v:0})
        res.status(200).send({data:users})
    } catch (error) {
       console.log(error) 
       res.status(500).send({message:"Internal Server Error",error})
    }
}

const GetStudentById=async(req,res)=>{
    try {
        let users=await StudentDetailModel.findById({_id:req.params.id})
        res.status(201).send({data:users})
    } catch (error) {
        console.log(error) 
       res.status(500).send({message:"Internal Server Error",error})
    }
}

const DeleteStudentById=async(req,res)=>{
    try {
        let users=await StudentDetailModel.deleteOne({_id:req.params.id})
        res.status(201).send({data:users})
    } catch (error) {
        console.log(error) 
       res.status(500).send({message:"Internal Server Error",error})
    }
}





module.exports={
    GetAllStudent,GetStudentById,PostStudent,EditStudentById,DeleteStudentById
}