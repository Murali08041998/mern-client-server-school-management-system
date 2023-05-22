import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import LmsApiService from '../api'
import { toast } from 'react-toastify';

function Admin() {
let [email,setEmail]=useState("")
let [password,setPassword]=useState("")
let navigate=useNavigate()
let handlelogin=async()=>{
 try {
  let res = await LmsApiService.post('users/login',{email,password})
  if(res.status===200){
    sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('userid',res.data.userid) 
        toast.success(res.data.message)
        // alert(res.data.message)

        navigate('/loginform')
        
     
  }
  
 } catch (error) {
  console.log(error)
      toast.error(error.response.data.message)
      alert(error.response.data.message)

 }
}
  return <>
  <div className='container-fluid'>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      
      <Button variant="primary" onClick={()=>handlelogin()}>
        Submit
      </Button>
    </Form>
  </div>
  </>
}

export default Admin;