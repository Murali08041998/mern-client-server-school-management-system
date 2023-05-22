import React,{useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import LmsApiService from '../api';
import { toast } from 'react-toastify';



function Viewform() {
    // let handleEdit=async(req,res,next)=>{
    //    try {
    //     let res=await LmsApiService('')
    //    } catch (error) {
    //     console.log(error)
    //   alert(error.response.data.message)
    //   toast.error(error.response.data.message)
    //    }
    // }
    // let handleDelete=async()=>{
    //    try {
    //       let res = await LmsApiService.delete('delete-student/:id/')
    //       if(res.status===200){
    //         toast.success(res.data.message)
    //       }
    //    } catch (error) {
    //     console.log(error)
    //         alert(error.response.data.message)
    //         toast.error(error.response.data.message)  
    //    } 
    // }
    let[student,setStudent]=useState([])

    let stud=async(req,res,next)=>{
        try {
            let res=await LmsApiService.get('student/all')
            if(res.status===200){
                setStudent(res.data.data)
            }
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
            toast.error(error.response.data.message)  
        }
    }
useEffect(()=>{
    stud()
})
  return <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Roll Number</th>
          <th>Year</th>
          <th>Total Subject</th>
          <th>Mobile Number</th>
          <th>Department</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {
            student.map((e,i)=>{
                return <tr key={e._id}>
                    <td>{i+1}</td>
                    <td>{e.firstName}</td>
                    <td>{e.LastName}</td>
                    <td>{e.RollNumber}</td>
                    <td>{e.Year}</td>
                    <td>{e.TotalSubject}</td>
                    <td>{e.Mobile}</td>
                    <td>{e.Department}</td>
                    <td>{e.createdAt}</td>
                    
                </tr>
            })
        }
        </tbody>
    </Table>
  </>
}

export default Viewform