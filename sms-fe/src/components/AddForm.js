import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LmsApiService from '../api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function AddForm() {
   let [firstName,setFirstName]=useState("");
   let [LastName,setLastName]=useState("");
   let [RollNumber,setRollnumber]=useState("");
   let [Year,setYear]=useState("");
   let [TotalSubject,setTotalsubject]=useState("");
   let [Mobile,setMobilenumber]=useState("");
   let [Department,setDepartment]=useState("");
   let navigate=useNavigate()
   let handleSubmit=async(req,res,next)=>{
    try {
      let res=await LmsApiService.post('/student/signsup',{firstName,LastName,RollNumber,Year,TotalSubject,Mobile,Department})
      if(res.status===201){
         toast.success(res.data.message)
        navigate('/viewform')
      }
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
      toast.error(error.response.data.message)
    }
   }
   

   
  return <>
      <div className='container-fluid' >
     <Form>
     <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter LastName" value={LastName}  onChange={(e)=>setLastName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Roll Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Rollnumber" value={RollNumber}  onChange={(e)=>setRollnumber(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Year</Form.Label>
        <Form.Control type="number" placeholder="Enter the Year" value={Year}  onChange={(e)=>setYear(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Total Subject</Form.Label>
        <Form.Control type="number" placeholder="Enter Total Subject" value={TotalSubject} onChange={(e)=>setTotalsubject(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile" value={Mobile} onChange={(e)=>setMobilenumber(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder="Enter Department" value={Department} onChange={(e)=>setDepartment(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
     </Form>
     </div>
  </>
}

export default AddForm;