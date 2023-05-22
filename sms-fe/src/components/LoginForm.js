import React from 'react'
import { useNavigate } from 'react-router-dom'
function LoginForm() {
    let navigate=useNavigate();
    let handlesubmitadd=()=>{
         navigate('/addform')
    }
    let handlesubmitview=()=>{
       navigate('/viewform')
    }
  return <>
     <div >
        <div className='text-center' margin-down='12px'>

          <h1 style={{color:'solid black',fontSize:'100px'}}><button onClick={() => handlesubmitadd()}>Add Student form</button></h1>
        </div><br />
        <div className='text-center' margin-down='12px'>
          <h1 style={{color:'solid black',fontSize:'100px'}}><button onClick={() => handlesubmitview()}>View Student form</button></h1>
        </div>
      </div>  
  </>
}

export default LoginForm;